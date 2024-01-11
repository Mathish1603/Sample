import React from 'react'

export default function UseStateMathish1(props) {
//   return (
//    <div>
//        <h1>{props.valuedata}</h1>
//      </div>
//  )
    if(props.value ===1){
        return(
            <>
                <h1>Page 1 is Viewed</h1>
                <h2>{props.data}</h2>
            </>
        )
    }
    if(props.value ===2){
        return(
            <>
                <h2>Page 2 is Viewed</h2>
                <h3>{props.data}</h3>
            </>
        )
    }
}
