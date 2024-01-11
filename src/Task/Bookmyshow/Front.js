import React from 'react'

export default function Front() {
  return (
    <div>
     <div>
        <nav class="navbar navbar-expand-xl navbar-dark bg-secondary">
    <div class="container"> 
     <div class="col-lg-3">
     <img src="https://assetscdn1.paytm.com/movies_new/_next/static/media/tpmc-logo.6a0114d4.png" width="100px" height="50px"/>
     </div>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse show col-lg-2" id="navbarDark">
       <ul class="navbar-nav me-auto mb-2 mb-xl-0">
         <li class="nav-item me-4">
           <a class="nav-link active fw-bold" aria-current="page" href="/bookmyshow" id='hover'>Home</a>
         </li>
         <li class="nav-item me-4">
           <a class="nav-link active fw-bold" href="/movies" id='hover'>Movies</a>
         </li>
         <li class="nav-item me-4">
           <a class="nav-link active fw-bold" href="#">About</a>
         </li>
         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Location
           </a>
           <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
             <li><a class="dropdown-item" href="#">Chennai</a></li>
             <li><a class="dropdown-item" href="#">Coimbatore</a></li>
             <li><a class="dropdown-item" href="#">Tirunelveli</a></li>
           </ul>
         </li>
       </ul>
       <form class="d-flex col-lg-6">
        <input class="form-control me-4" type="search" placeholder="Search" aria-label="Search"/>
         <button class="btn btn-outline-danger text-light bg-danger" type="submit">Signin</button>
       </form>
     </div>
   </div>
 </nav>
 <div>
       <BrowserRouter>
            <Routes>
       <Route path='/bookmyshow' element={<BookMy/>}></Route>
       <Route path='/movies' element={<Movies/>}></Route>
       <Route path='/chandramuki' element={<Chandramuki/>}></Route>
       <Route path='/confirm' element={<Confirmation/>}></Route>
    </Routes>
     </BrowserRouter>
     </div>
   </div>
    </div>
  )
}
