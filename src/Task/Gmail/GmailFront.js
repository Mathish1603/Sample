import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GmailInbox from './GmailInbox'

export default function GmailFront() {
  
  return (
    <div>
      <nav class="navbar bg-light fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler border-0 rounded-circle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler">
    <i class="bi bi-justify"></i>
    </button>
    <img className='me-auto ms-4' src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"/>
    <div class="d-flex col-5 me-auto">
      <div className='input-group'>
      <span className='input-group-text'><button class="btn btn-light rounded-circle"><i class="bi bi-search-heart"></i></button></span>
        <input class="form-control border-start-0 bg-light border-end-0" type="search" placeholder="Search Mail" aria-label="Search"/>
      <span className='input-group-text'><button class="btn btn-light rounded-circle"><i class="bi bi-sliders2"></i></button></span>
      </div>
      </div>
      <div>
        <button class="btn btn-light rounded-circle me-5"><i class="bi bi-question-octagon"></i></button>
        <button class="btn btn-light rounded-circle me-5"><i class="bi bi-gear-fill"></i></button>
        <button class="btn btn-light rounded-circle me-5"><i class="bi bi-grid-3x3-gap"></i></button>
        <button class="btn btn-light rounded-circle"><img className='rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8blpqKmP0sfpUKUY6-M3jIV8KX5nZ5d1_Q&usqp=CAU" width={30}/></button>
      </div>
    <div class="collapse navbar-collapse show" id="navbarToggler">
      <br></br>
      <button className='btn btn-info text-dark'><i class="bi bi-pencil"></i> Compose</button>
    <nav class="nav flex-column pt-3 ">
  <a class="nav-link text-dark" href="/mailinbox"><i class="bi bi-inbox-fill px-2"></i> Inbox</a>
  <a class="nav-link text-dark" href="#"><i class="bi bi-star px-2"></i> Starred</a>
  <a class="nav-link text-dark" href="#"><i class="bi bi-clock px-2"></i> Snoozed</a>
  <a class="nav-link text-dark" href="#"><i class="bi bi-send-arrow-up-fill px-2"></i> Sent</a>
  <a class="nav-link active text-dark" href="#"><i class="bi bi-file-earmark px-2"></i> Drafts</a>
  <ul class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDrop" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
          <ul class="dropdown-menu" aria-labelledby="navbarDrop">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </ul>
</nav>
    </div>
  </div>
</nav>
<div className=''>
  <BrowserRouter>
  <Routes>
    <Route path='/mailinbox' element={<GmailInbox/>}></Route>
  </Routes>
  </BrowserRouter>
</div>
    </div>
  )
}
