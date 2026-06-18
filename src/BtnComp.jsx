import React from 'react'
// props : short for properties, it is used to pass data from a parent component to a child component.

function BtnComp({emma, coco}) {
  return (
    <button className={' text-white p-2 rounded-md font-extralight cursor-pointer hover:bg-pink-200 hover:text-black duration-350 ' + coco} >
        {emma}
    </button>
  )
}

export default BtnComp