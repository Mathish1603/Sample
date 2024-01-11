import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function CreateUser() {
     
    const [name,setName] = React.useState('');
    const [file,setFile] = React.useState('');

    const navi = useNavigate();

    function AddData(){
        axios.post('http://localhost:5001/postfile',{
            Name:name,FileName:file
        })
        .then(alert('Image Added Successfully'))
        .catch(err => console.log(err));

        navi('/')
    }
    return(
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
                    <button onClick={AddData} className='btn btn-primary ms-3'>Submit</button>
                </div>
            </div>
        </div>
   )
}