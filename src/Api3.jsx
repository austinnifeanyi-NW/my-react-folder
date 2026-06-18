import React, { useEffect, useState } from 'react'

function Api3() {
    let [addData,setaddData]=useState([])


    useEffect(()=>{
        fetch(' https://food-backend-3xb1.onrender.com/restaurants')
            .then(response => response.json())
            .then(data => setaddData(data));
    },[]) 
  return (
    <div className='h-minscreen w-full bg-gray-900 grid grid-cols-3 gap-2.5'>
  {
    addData.length != 0?

    addData.map((item)=>(
      <div className=''>
        <div className='h-[250px] bg-sky-500 rounded-md'>
             <img src={item.image} className="h-full w-full" />
             
        </div>
        <h1 className='text-3xl font-bold text-white'>{item.name}</h1>
        <h1 className='text-white font-bold mt-[10px] whitespace-nowrap overflow-hidden text-ellipsis text-white'>{item.address}</h1>
        <span className=' text-white font-bold'>{item.food_types} </span>
         <h1 className='text-white'>{item.description}</h1>
        <h1 className='text-white'>{item.opening_time}</h1>
        <h1 className='text-white'>{item.closing_time}</h1>
        <h1 className='text-white'>{item.rating}</h1>

    </div>

    ))
    : 
    <p className='text-white'>loading</p>

  }
  </div>

    
  )
}

export default Api3