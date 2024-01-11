import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Signin() {
    
    const [views,setViews] = useState([])

    useEffect(()=>{
        axios.get('https://650beaa047af3fd22f66b27d.mockapi.io/Datas')
        .then(res => setViews(res.data))
        .catch(err=> console.log(err))
    },[])
  return (
    <div>
  <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse show" id="navbarDark">
      <ul class="navbar-nav me-5 mb-2 mb-xl">
      </ul>
      <form class="d-flex ms-auto">
        <button class="btn btn-primary me-5 " type="submit">SignOut</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}
