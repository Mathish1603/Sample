import React from 'react'

export default function GmailInbox() {
  return (
    <div>
        <div><nav class="navbar bg-light">
  <div class="container-fluid">
    <div>
    <button className='btn btn-light'><input className='form-check-input' type="checkbox"/><i class="bi bi-caret-down-fill px-2"></i></button>
    <button className='btn btn-light rounded-circle'><i class="bi bi-arrow-clockwise"></i></button>
    <button className='btn btn-light rounded-circle'><i class="bi bi-three-dots-vertical"></i></button>
    </div>
    <div>
        <button className='btn btn-light text-secondary'>1-50 of 1745</button>
        <button className='btn btn-light rounded-circle'><i class="bi bi-caret-left"></i></button>
        <button className='btn btn-light rounded-circle'><i class="bi bi-caret-right"></i></button>
        <button className='btn btn-light rounded'><i class="bi bi-keyboard-fill"></i></button>
        <button className='btn btn-light rounded-circle'><i class="bi bi-caret-down-fill"></i></button>

    </div>
  </div>
</nav></div>
<div>
  <nav class="navbar bg-light">
    <div class="container-fluid">
     <div><button className='btn btn-outline-secondary border-0 col-12'><i class="bi bi-image px-3"></i>Primary</button></div>
     <div><button className='btn btn-outline-secondary border-0 col-12'><i class="bi bi-tag px-3"></i>Promotions</button></div>
     <div><button className='btn btn-outline-secondary border-0 col-12 me-5'><i class="bi bi-people-fill px-3"></i>Social</button></div>
    </div>

  </nav>
</div>
    </div>
  )
}
