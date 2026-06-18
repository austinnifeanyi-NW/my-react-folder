import React, { useRef, useState } from 'react'

function Minicaculator() {

    let [answer,setAnswer]=useState(0)
      let num1=useRef()
      let num2=useRef()

      function forAdd() {
        setAnswer(num1.current.value + num2.current.value)
      }

       function forAdd() {
        setAnswer(num1.current.value * num2.current.value)
      }

      function forAdd() {
        setAnswer(num1.current.value - num2.current.value)
      }

      function forAdd() {
        setAnswer(num1.current.value % num2.current.value)
      }
  
  
  return (
    <div className='h-[600px] w-full bg-gray-500 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-4xl'>MINI CALCULATOR</h1>
        <div className='h-[400px] w-[800px] bg-green-600'>
            <h1 className='justify-center items-center flex mt-[40px] font-bold gap-9' >NUMBER1:
                <input type="text" ref={num1} className='h-[50px] w-[400px] bg-amber-400 ' />

            </h1>

            <h1 className='justify-center items-center flex mt-[40px] font-bold gap-9' >NUMBER2:
                <input type="text" ref={num2} className='h-[50px] w-[400px] bg-pink-600 ' />

            </h1>
            <div className='flex ml-[30px] '>
                <button onClick={forAdd} className='h-[70px] w-[60px] bg-green-500 flex justify-center items-center ml-[100px] mt-[40px] rounded-4xl text-4xl'>  ➕  </button>
            <button onClick={forAdd} className='h-[70px] w-[60px] bg-red-500 flex justify-center items-center ml-[100px] mt-[40px] rounded-4xl text-4xl'>  ❌  </button>
            <button onClick={forAdd} className='h-[70px] w-[60px] bg-green-500 flex justify-center items-center ml-[100px] mt-[40px] rounded-4xl text-4xl'> ➖  </button>
            <button  onClick={forAdd} className='h-[70px] w-[60px] bg-pink-500 flex justify-center items-center ml-[100px] mt-[40px] rounded-4xl text-4xl'>🔣</button>

            </div>
            <div>
                <button className='h-[50px] w-[200px] bg-blue-600 ml-[300px] mt-[50px]'>{answer}</button>
            </div>
        </div>

    </div>
  )
}

export default Minicaculator