import React,{useRef} from 'react'

export default function UseRefTask() {
  return (
    <div>
        <Mathish/>
    </div>
  )
}
const Mathish=()=>{

    const M = useRef(null)
    const N = useRef([])
    function changeclr(){
      const mari=M.current.value;
      N.current.push(mari);
      M.current.value=""

      const r = Math.floor(Math.random()*255);
      const g = Math.floor(Math.random()*255);
      const b = Math.floor(Math.random()*255);

      const rgb =`rgb(${r},${g},${b})`

    M.current.style.color = rgb;
    M.current.innerHTML = N.current.value
    }
    return(
        <div>
            <div class="border border-5 border-dark p-3">
            <label class="fw-bold">Type:</label>
            <input class="form-control border border-primary" type="text" ref={M} />
            <h3><span ref={M}></span></h3>
            <button onClick={changeclr} class="btn btn-primary px-5">Click</button>
            <ol>
              {N.current.map((item,index) =>(
                <li key={index}>{item}</li>
              ))}
            </ol>
            </div>
        </div>
    )
}
