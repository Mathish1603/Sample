import React, { useEffect, useState } from 'react'

export default function Logesh() {
    
  return (
    <div>
        <div>
            <Bala />
        </div>
    </div>
  )
}


const Bala = () =>{
    const [idm, hardik] = useState(0);
    const [segolsys, update] = useState(0);
    useEffect(()=>{console.log("am useeffect")},[segolsys])
    return(
        <div>
           <p>{idm}</p>
           <button onClick={()=>{hardik(idm + 1)}}>Submit</button>
           <p>{segolsys}</p>
           <button onClick={()=>{update(segolsys - 1)}}>Submit</button>
           
        </div>
    )
}