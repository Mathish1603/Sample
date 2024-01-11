import React, { useCallback, useState } from 'react'

export default function UseCallBackHook() {

    const [inp,setInp] =useState('');
    const [data,setData] = useState([]);

    const HandleSubmit = useCallback(()=>{
        if(inp){
            setData([...data,inp]);
            console.log(data);
        }
    },[inp,data])

  return (
    <div>
        <input type="text" onChange={(e)=>{setInp(e.target.value)}}/>
        <button onClick={HandleSubmit}>Submit</button>

        <ol>
            {
                data.map((items,index)=>{
                    return(
                        <li key={index}>{items}</li>
                    )
                })
            }
        </ol>
    </div>
  )
}
