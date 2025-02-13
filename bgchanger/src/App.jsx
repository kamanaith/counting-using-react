

import React, { useState } from 'react'


function App() {
  const [color, setcolor] = useState("green")
  return (
    <>
        <div className='w-full h-screen  duration-150' style={{backgroundColor: color}}></div>
        <div className='fixed rounded-2xl bottom-12 inset-x-1 px-3'>
          <div className='flex flex-wrap gap-2 justify-evenly bg-white p-1 my-1 rounded-full' >
            <button onClick={()=>setcolor('red') } className='outline-none py-2 px-5 rounded-full text-white shadow-sm'  style={{backgroundColor: "red"}}>Red</button>
            <button onClick={()=> setcolor('green')} className='outline-none  py-2 px-5 rounded-full text-white shadow-sm'  style={{backgroundColor: "green"}}>green</button>
            <button onClick={()=> setcolor('blue')} className='outline-none  py-2 px-5 rounded-full text-white shadow-sm'  style={{backgroundColor: "blue"}}>blue</button>
            <button onClick={()=> setcolor('pink')} className='outline-none  py-2 px-5 rounded-full text-white shadow-sm'  style={{backgroundColor: "pink"}}>pink</button>
            <button onClick={()=> setcolor('yellow')} className='outline-none  py-2 px-5 rounded-full text-white shadow-sm'  style={{backgroundColor: "yellow"}}>yellow</button>
            <button onClick={()=> setcolor('purple')} className='outline-none  py-2 px-5 rounded-full text-white shadow-sm'  style={{backgroundColor: "purple"}}>purple</button>
            <button onClick={()=> setcolor('skyblue')} className='outline-none  py-2 px-5 rounded-full text-white shadow-sm'  style={{backgroundColor: "skyblue"}}>skyblue</button>
            <button onClick={()=> setcolor('maroon')} className='outline-none  py-2 px-5 rounded-full text-white shadow-sm'  style={{backgroundColor: "maroon"}}>maroon</button>
            <button onClick={()=> setcolor('black')} className='outline-none  py-2 px-5 rounded-full text-white shadow-sm'  style={{backgroundColor: "black"}}>black</button>
            <button onClick={()=> setcolor('grey')} className='outline-none  py-2 px-5 rounded-full text-white shadow-sm'  style={{backgroundColor: "grey"}}>grey</button>

          </div>
        </div>
    </>
  )
}

export default App
