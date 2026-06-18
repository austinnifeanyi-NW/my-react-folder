import React from 'react'
import BtnComp from './BtnComp'

function Footer() {
  return (
    <div className=' h-[400px] bg-lime-100 grid place-items-center content-center gap-2'>
        <p>CopyRight 2026</p>
        <BtnComp emma="The end" coco="bg-green-800"/>
    </div>
  )
}

export default Footer