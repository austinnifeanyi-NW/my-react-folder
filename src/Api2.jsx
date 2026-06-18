import React, { useEffect, useState } from 'react'

function Api2() {
    let [placeData,setplaceData]=useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setplaceData(data.products));
    },[])

  return (
    <div className='h-screen w-full bg-black grid grid-cols-5 gap-2'>
        {
            placeData.length != 0?
            
            placeData.map((item)=>(
                <div className=' bg-gray-600 p-2 grid-cols-1 gap-2'>
                    <div className='h-[100px] w-100% bg-sky-500 rounded-md'>
                        <img src={item.thumbnail} className="h-full w-full " />
                    </div>
                    <h1 className='text-white font-bold mt-[10px] whitespace-nowrap overflow-hidden text-ellipsis'>{item.title}</h1>
                    <span className=' '>${item.price} </span>  
                </div>
            ))
            : 
            <p>loading</p>
        }

    </div>
  )
}

export default Api2