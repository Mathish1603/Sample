import React, { useContext } from 'react'
import { a } from './UseContext'

export default function File2() {

  const b = useContext(a);
  return (
    <div>
        <h1>File2</h1>
        <ol>
            {
              b.map(
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
