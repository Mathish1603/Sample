import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate,Link, useParams } from 'react-router-dom';


export default function Edit() {

    const [name,setName] = React.useState('');
    const [file,setFile] = React.useState('');

    const navi = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        axios.get('http://localhost:5001/getfile/'+id)
        .then(res =>{
            setName(res.data.Name);
            setFile(res.data.FileName);
        })
    },[])

    function UpdateData(){
        axios.put('http://localhost:5001/updatefile/'+id,{
            Name:name,FileName:file
        })
        .then(alert('Image Updated Successfully'))
        .catch(err => console.log(err));

        navi('/')
    }

  return (
    <div className='pt-5'>
            <div className='border border-5 secondary'>
                <div>
                    <label className='fw-bold'>Name:</label>
                    <input type="text" className='text-capitalize' value={name} onChange={(e)=>{
                       setName(e.target.value);
                    }} />
                    <label className='fw-bold'>Image:</label>
                    <input type='file' value={file} onChange={(e)=>{
                        setFile(e.target.value);
                    }}/>
                    <Link to={'/'} className='btn btn-dark ms-3'>Back</Link>
                    <button onClick={UpdateData} className='btn btn-primary ms-3'>Submit</button>
                </div>
            </div>
        </div>
  )
}