import React, {useReducer} from 'react'

export default function UseReducerHook() {

    const dataum = {
       Sname:'',
       Age:0
    }
     
    const [initial,dispatch] = useReducer(mathi,dataum);

    function mathi(initial,action){
        switch(action.type){
            case 'change-name':
                return{
                    Sname:action.fname,
                    Age:initial.Age
                }
            case 'inc-age':
                return{
                    Sname:initial.fname,
                    Age:initial.Age + 1
                }
            case 'dec-age':
                return{
                    Sname:initial.fname,
                    Age:initial.Age - 1
                }    
        }
    }
  return (
    <div className='container mt-5 p-3'>
        <div className='input-group mb-3'>
        <button className='btn btn-outline-dark ms' onClick={()=>{
            dispatch({
                type:'inc-age'
            })
        }}>Increment</button>
        <input type='text' className='border-dark' onChange={(e)=>{
            dispatch({
                type:'change-name',
                fname:e.target.value
            })
        }}/>
        <button className='btn btn-outline-dark' onClick={()=>{
            dispatch({
                type:'dec-age'
            })
        }}>Decrement</button>
        </div>

        <h4 className='text-capitalize'>Name:{initial.Sname}</h4>
        <h4 className='text-capitalize'>Age:{initial.Age}</h4>
    </div>
  )
}
