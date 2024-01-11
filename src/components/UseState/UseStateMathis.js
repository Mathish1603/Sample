import React,{useState} from 'react'
import UseStateMathish1 from './UseStateMathish1';

export default function UseStateMathis() {

    const [username,setUsername] = useState("");
    const [name,setUsernames] = useState(" ");


  return (
    <div>
        <label>Username:</label>
        <input type='text' onChange={(e)=>{setUsernames(e.target.value)}}/>

        <button onClick={()=>setUsername(1)} >Page1</button>
        <button onClick={()=>setUsername(2)} >Page2</button>

        <UseStateMathish1 value={username} data={name} />

    </div>
  )
}
