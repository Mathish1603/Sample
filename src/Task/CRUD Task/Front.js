import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

export default function Front() {
 
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    
    const navigate=useNavigate();
    function AddData(){
        axios.post('https://650beaa047af3fd22f66b27d.mockapi.io/Datas',{
          Name:name,Email:email,Password:pass
        })
        .then(alert('Data Added Successfully'))
        .catch(err => console.log(err));

        navigate('/')
       
    }


  return (
    <div>
        <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LOGIN FORM</a>
     <div class="collapse navbar-collapse show" id="navbarDark">
      <ul class="navbar-nav me-5 mb-2 mb-xl">
      </ul>
      <form class="d-flex ms-auto">
        <button class="btn btn-primary me-5 col-4" type="submit">Login</button>
        <button class="btn btn-danger me-5 col-4" type="submit">Create</button>
      </form>
    </div>
  </div>
</nav>
<div className='p-5'>
    <div className='container border border-5 border-dark p-3'>
        <label className='fw-bold fs-5'>Name:</label>
        <input className='form-control border-primary text-capitalize' value={name} type='text' onChange={(e)=>setName(e.target.value)} />
        <label className='fw-bold fs-5'>Email:</label>
        <input className='form-control border-primary' value={email} type='email' placeholder='abc@gmail.com ' onChange={(e)=>setEmail(e.target.value)} />
        <label className='fw-bold fs-5'>Password:</label>
        <input className='form-control border-primary' value={pass} type='password'onChange={(e)=>setPass(e.target.value)} />
        <div className='d-flex ms-auto'>
        <button onClick={AddData} className='btn btn-danger m-3 ms-auto'>Create</button>
        <Link to={'/'}>Back</Link>
        </div>


    </div>
</div>
    </div>
  )
}
