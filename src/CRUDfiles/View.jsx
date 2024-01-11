import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function ViewUser() {

    const [views,setViews] = React.useState([])

    function DelData(id){
        axios.delete('http://localhost:5001/deletefile/'+id)
        .then(alert('Image Deleted Successfully'))
    }

    React.useEffect(()=>{
        axios.get('http://localhost:5001/file')
        .then(res => setViews(res.data))
        .catch(err=> console.log(err))
    },[])
  return (
    <div>
        <Link to={'/create'} className='btn btn-success col-12'>Add data</Link>
        <table className='table border border-dark text-center'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    views.map((items)=>{
                        return(
                            <tr>
                                <td>{items.Name}</td>
                                <td>{items.Image}</td>
                                <td>
                                    <Link to={'/edit/'+items._id} className='btn btn-dark'>Edit</Link>
                                    <button className='btn btn-danger ms-3' onClick={()=>{
                                        DelData(items._id)
                                    }
                                    }>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}