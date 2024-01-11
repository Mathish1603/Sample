import React, { useState } from 'react'
import File1 from './File1'
import File2 from './File2'
export const a = React.createContext();

export default function UseContext() {
    const [names,setNames] = useState('');
    const [vals,setVals] = useState([]);

    function Reg(e){
        e.preventDefault();
        setVals(valid=>[...valid,names]);
        console.log(vals);
        setNames(" ")
    }

  return (
    <div>
        <form onSubmit={Reg} class="text-center p-5">
            <label>
            <input type="text" name="" class="form-control border-primary" id="" value={names} onChange={(e)=>setNames(e.target.value)}/>
            </label>
            <button type='submit' class="ms-1 btn btn-primary p-2">Submit</button>
        </form>

        <a.Provider value={vals}>
            <File1/>
            <File2/>
        </a.Provider>
        
    </div>
  )
}
