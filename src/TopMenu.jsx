import React from 'react'
import BtnComp from './BtnComp'

function TopMenu() {
  return (
    <div className=' bg-slate-700 text-white flex h-[60px] justify-around items-center'>
        <h1 className=' text-3xl font-extrabold'>Logo</h1>
        <nav>
            <ol className=' flex gap-[40px] italic'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ol>
        </nav>
        <BtnComp emma="Get Started" coco="bg-black"/>
    </div>
  )
}

export default TopMenu