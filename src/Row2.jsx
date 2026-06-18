import React from 'react'
import BtnComp from './BtnComp'

function Row2() {
  return (
    <div className=' h-[300px] bg-sky-300 pl-[40px] flex flex-col justify-center items-start gap-5'>
        <h1 className=' text-3xl'>BixtBase Coding</h1>
        <p className=' text-gray-700 italic'>Where learning is fun. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae magnam autem architecto totam eveniet, quisquam soluta ad veritatis vel accusamus ipsum inventore rem ex iure minus? Alias officiis aliquid voluptatum.</p>
        <BtnComp emma="read more" coco="bg-red-500"/>
    </div>
  )
}

export default Row2