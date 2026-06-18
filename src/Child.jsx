import React from 'react'

function Child({text1, iconText}) {
  return (
    <div className=' h-[250px] border-b-[10px] border-b-blue-500 w-[30%] bg-white flex flex-col gap-1.5 items-center justify-center'>
        <div className=' h-[80px] w-[80px] rounded-full bg-blue-600 grid place-items-center'>
            {iconText}
        </div>
        
        <h2 className=' text-2xl'>{text1}</h2>
        <p className=' text-gray-500 text-center text-[14px] w-[70%]'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
    </div>
  )
}

export default Child