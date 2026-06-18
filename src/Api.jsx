import React, { useEffect, useState } from 'react'

function Api() {

    let [holdData, setholdData]=useState('')

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/1')
            .then(response => response.json())
            .then(data => setholdData(data));
    },[])
  return (
    <div className='h-[330px] w-[250px] bg-gray-600 p-2'>
        <div className='h-[250px] bg-sky-500 rounded-md'>
             <img src={holdData.image} className="h-full w-full" />
             
        </div>
        <h1 className='text-white font-bold mt-[10px] whitespace-nowrap overflow-hidden text-ellipsis'>{holdData.title}</h1>
        <span className=' '>${holdData.price} </span>

    </div>
  )
}

export default Api