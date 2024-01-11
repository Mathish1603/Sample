import React,{useContext} from 'react'
import {a}from './UseContextTask'
// import UseContextFile2 from './UseContextFile2'

export default function UseContextFile1() {
   
    const b = useContext(a)
  return (
    <div>
     <form id={b} class="border border-5 p-3">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control border border-primary" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary px-5">Submit</button>
</form>
    {/* <UseContextFile2/> */}
    </div>
  )
}
