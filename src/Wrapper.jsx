import React from 'react'
import Child from './Child'
import { LuSquareStack } from "react-icons/lu";
import { PiBezierCurveLight } from "react-icons/pi";

function Wrapper() {
  return (
    <div className=' h-[300px] bg-gray-200 flex justify-evenly items-center'>
        <Child text1="Visualize it" iconText={<LuSquareStack className=' text-3xl text-white'/>}/>
        <Child text1="Create it" iconText={<PiBezierCurveLight className=' text-3xl text-white'/>}/>
        <Child />
    </div>
  )
}

export default Wrapper