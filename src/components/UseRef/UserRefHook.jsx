import React,{useRef} from 'react'

export default function UserRefHook() {

    const RefEle = useRef(null);
    const inp = useRef("");
    
    console.log(RefEle.current);

    function changeclr(){
      const r = Math.floor(Math.random()*256)
      const g = Math.floor(Math.random()*256)
      const b = Math.floor(Math.random()*256)

          const rgb = `rgb(${r},${g},${b})`;

      RefEle.current.style.color = rgb;

      RefEle.current.innerHTML = inp.current.value;

    }
  return (
    <div>
      <div class="border border-5 p-3">
        <input type="text" ref={inp}/>
        <h1><span ref={RefEle}></span>This is a new ParaGraph.</h1>
        <button onClick={changeclr}>Change It</button>
        </div>  
    </div>
  )
}
