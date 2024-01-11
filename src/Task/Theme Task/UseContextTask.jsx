import React,{useState} from 'react'
import './UseContextTask.css'
import UseContextFile1 from './UseContextFile1';
export const a = React.createContext();

export default function UseContextTask() {
  const [name, setName] = useState('light')
  function save(mathi){
     mathi.preventDefault();
     setName((clrtheme)=> clrtheme === 'light'?'dark':'light')
  }
  return (
    <div style={{ background: name === 'light' ? '#fff' : '#333', color: name === 'light' ? '#000' : '#fff' }} >
       <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked onChange={save}/>
      <label class="form-check-label" for="flexSwitchCheckChecked">{name}Theme</label>
      </div>
      <a.Provider value={name}>
        <UseContextFile1/>
     </a.Provider>
      
    </div>
  )
}
