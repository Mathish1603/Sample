import React,{useContext} from 'react'
import {a} from './UseContextTask'

export default function UseContextFile2() {

    const b = useContext(a);
  return (
    <div>
        <div id={b}></div>
    </div>
  )
}
