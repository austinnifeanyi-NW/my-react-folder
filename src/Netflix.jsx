import React, { useState } from 'react'



function Netflix() {
  return (
    <div className='h-[600px] w-full bg-gray-600'>
      <h1 className='text-4xl font-bold'>Frequently Asked Question</h1>
      <div className='h-[70px] w-[80%] bg-amber-600 ml-[100px] mt-[40px]'>
       
        <h1 className='text-2xl ml-[980px]'>❌</h1>
         <h1 className='text-4xl font-bold'>What is Netflix</h1>
      </div>
       <div className='h-[70px] w-[80%] bg-green-600 ml-[100px] mt-[40px]'>
        <h1 className='text-2xl ml-[980px]'>❌</h1>
         <h1 className='text-4xl font-bold'>How much does Netflix cost</h1>
       </div>
        <div className='h-[70px] w-[80%] bg-red-700 ml-[100px] mt-[40px]'>
          <h1 className='text-2xl ml-[980px]'>❌</h1>
          <h1 className='text-4xl font-bold'>Where can i watch</h1>
        </div>
        <div className='h-[70px] w-[80%] bg-black ml-[100px] mt-[40px]'>
          <h1 className='text-2xl ml-[980px]'>❌</h1>
          <h1 className='text-4xl font-bold text-white'>How do i cancel</h1>
        </div>
      
    </div>
  )
}

export default Netflix