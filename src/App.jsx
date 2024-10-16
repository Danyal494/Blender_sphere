import { useState } from 'react'

import './App.css'

import Btn from './components/Btn'

import Task from './components/Task'
import PT from './components/PTask'


function App() {
  const [open, setOpen] = useState(true)

  const handleBtn = () =>{
    setOpen(false)
  }

  return (
    <div className='bg-[#42A5F5]' style={{ position: "relative", height: "100vh", width: "100vw" }}>
      {open ? <Btn endLoading={handleBtn}/> : <Task style={{ position: "absolute", top: 20, left: 0, zIndex: 10 }}/> }
     <PT style={{ position: "absolute", top: 0, left: 0, zIndex: 5 }}/>
  
    </div>
  )
}

export default App
