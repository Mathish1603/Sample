import React, { useState,useCallback } from 'react'

export default function UseCallBackTask() {

    const [mathi,setMathi] = useState('');
    const [vicky,setVicky] = useState([]);

    const ap = useCallback(()=>{

            setVicky([...vicky,mathi]);
            console.log(vicky);
    
    },[vicky,mathi])
 
    const deleteItem = useCallback((removethis)=>{
    setVicky((prevItems)=> prevItems.filter((items)=>items !== removethis))
    }
    )
     const editItem = (id,mathi)=>{
        const updatedItems=vicky.map((items)=>items.id === id? {...items,text: mathi} : items);
        setVicky(updatedItems);
     }

  return (
    <div>
        <div className="container mt-5 p-3">
        <div className='col-5'>
        <label className="fw-bold fs-3">Type:</label>
        <input className="form-control border border-primary" type='text' onChange={(e)=>{setMathi(e.target.value)}}/>
        </div>
        <br/>
        <button onClick={ap} className="btn btn-primary px-2 ">Submit</button>
        <ol>
            {
                vicky.map((items,index)=>
                    (
                        <h5 className='text-capitalize'><li key={index}>{items}<button onClick={()=>deleteItem(items)} className="btn btn-outline-dark ms-2">Clear</button></li></h5>
                    )

                )
            }
        </ol>
        </div>
    </div>
  )
}
