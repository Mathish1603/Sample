import React, { useContext } from 'react'
// import File2 from './File2'
import { a } from './UseContext'

export default function File1() {
  const c = useContext(a);
  return (
    <div>
        <h1>File 1</h1>
        {/* <File2/> */}
        <ol>
            {
              c.map(
                (q)=>{
                  return(
                    <li>{q}</li>
                  )
                }
              )
            }
        </ol>
    </div>
  )
}
