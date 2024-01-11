import React, { useState,useEffect } from 'react'

export default function Useeffect() {
  const[ap,setap]=useState(0);
  const[apm,setapm]=useState(0);

  useEffect(()=>{
    console.log(ap);
    console.log(apm),[apm]
  })

  return (
    <div>
      <h1>Boomer {ap}</h1>
      <button onClick={()=>setap(ap+1)}>Click</button>
      <h1>Mari {apm}</h1> 
      <button onClick={()=>setapm(apm+1)}>Click It</button>

    </div>
  )
}
