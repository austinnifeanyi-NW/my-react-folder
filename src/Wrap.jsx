import React from 'react'

function Wrap() {
  return (
    <div className=' h-52 bg-cyan-600 flex justify-center items-center flex-col gap-3'>
        <h1 className=' text-4xl font-bold'>I love coding</h1>
        <button className=' bg-black text-white p-1.5 rounded-md'>click me</button>
        <input type="text" className=' border-2 p-1'/>
    </div>
  )
}

export default Wrap