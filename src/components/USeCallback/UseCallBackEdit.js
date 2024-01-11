import React, { useCallback, useState } from 'react'

export default function UseCallBackEdit() {

    const [mathi ,setMathi] = useState('');
    const [vicky,setVicky]  = useState([]);

    const ap =useCallback( ()=>{

         const newItem = {id:Date.now(),text:mathi}
         setVicky([...vicky,newItem])
         setMathi('');
    })

    const editItem = useCallback((id,newtext)=>{
        setVicky((prevItems)=>prevItems.map((items)=>items.id === id ? {...items,text:newtext}:items));

    },[]);
  return (
    <div>
        <div className="container mt-5 p-3">
        <div className='col-5'>
        <label className="fw-bold fs-3">Type:</label>
        <input className="form-control border border-primary" type='text' value={mathi} onChange={(e)=>setMathi(e.target.value)}/>
        </div>
        <br/>
        <button onClick={ap} className="btn btn-primary px-2 ">Submit</button>
        <ol>
            {vicky.map((items)=>(
                <h5><li key={items.id}><input type='text' className='border-0 text-capitalize' value={items.text} onChange={(e)=>editItem(items.id,e.target.value)}/></li></h5>
            ))}
        </ol>
        </div>
    </div>
  )
}
