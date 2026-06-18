import React, { useRef, useState } from 'react'
   

function Salesapp() {
  let[price1,setprice1]=useState("")
  let[price2,setprice2]=useState("")
  let[price3,setprice3]=useState("")
  let[cost1,setcost1]=useState("")
  let[cost2,setcost2]=useState("")
  let[cost3,setcost3]=useState("")
  let qty1=useRef()
  let qty2=useRef()
  let qty3=useRef()

  function obi() {
    if(price1==""){
      setprice1(2000)
    }else{
      setprice1("")
    }
  }

   function  obi2() {
    if (price2=="") {
      setprice2(2000)
    }else{
      setprice2("")
    }
   }

    function  obi3() {
    if (price3=="") {
      setprice3(2000)
    }else{
      setprice3("")
    }
   }

  let forCost=()=>{
    setcost1(qty1.current.value*price1)
  }

  let forcost2=()=>{
    setcost2(qty2.current.value*price2)
  }

  let forcost3=()=>{
    setcost3(qty3.current.value*price3)
  }


  return (
    <div className='h-[600px] bg-gray-500 flex items-center justify-center '>
      <div className='w-[70%] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
      <div className='px=6 py-4 border-b border-gray-100'>
      <h2 className='text-lg font-semibold text-gray-700 tracking-wide ml-[400px]'>SALES APP</h2>

    </div>
    <table className='w-full'> 
      <thead>
        <tr className='bg-red-700 text-xs uppercase tracking-wider text-gray-400'>
          <th className='px-6 py-3 text-left font-medium'>Item</th>
          <th className='px-6 py-3 text-left font-medium'>Quantity</th>
          <th className='px-6 py-3 text-left font-medium'>Price</th>
          <th className='px-6 py-3 text-left font-medium'>Cost</th>
          
          
        </tr>
      </thead>
      <tbody>
        <tr className='border-t border-gray-100 hover:bg-amber-50 transition-colors'>
          <td className='px-6 py-3 flex items-center gap-2 text-gray-600'>
            <input type="checkbox" className='accent-indigo-500' onClick={obi}/>
            Shoe
          </td>
          <td className='px-3 py-6'><input ref={qty1} onInput={forCost} type="text" className='w-20 border border-gray-200 rounded-b-md px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus-ring-indigo-300' /></td>
          <td className='px-6 py-3'><input value={price1} type="text" className='w-20 border border-gray-200 rounded-b-md px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus-ring-indigo-300 '/></td>
          <td className='px-6 py-3'><input value={cost1} type="text" className='w-20 border border-gray-200 rounded-b-md px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus-ring-indigo-300' /></td>

       
        </tr>


        <tr className='border-t border-gray-100 hover:bg-amber-50 transition-colors'>
          <td className='px-6 py-3 flex items-center gap-2 text-gray-600'>
            <input type="checkbox" className='accent-red-500'onClick={obi2} />
            Bag
          </td>
          <td className='px-6 py-3'><input ref={qty2} onInput={forcost2} type="text" className='w-20 border border-gray-200 rounded-b-md px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus-ring-indigo-300' /></td>
          <td className='px-6 py-3'><input value={price2} type="text" className='w-20 border border-gray-200 rounded-b-md px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus-ring-indigo-300 ' /></td>
          <td className='px-6 py-3'><input value={cost2} type="text" className='w-20 border border-gray-200 rounded-b-md px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus-ring-indigo-300' /></td>
       
        </tr>


        <tr className='border-t border-gray-100 hover:bg-amber-50 transition-colors'>
          <td className='px-6 py-3 flex items-center gap-2 text-gray-600'>
            <input type="checkbox" className='accent-amber-600'onClick={obi3} />
            Rice
          </td>
          <td className='px-6 py-3'><input ref={qty3} onInput={forcost3} type="text" className='w-20 border border-gray-200 rounded-b-md px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus-ring-indigo-300'/></td>
          <td className='px-6 py-3'><input value={price3} type="text" className='w-20 border border-gray-200 rounded-b-md px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus-ring-indigo-300 '/></td>
          <td className='px-6 py-3'><input value={cost3} type="text" className='w-20 border border-gray-200 rounded-b-md px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus-ring-indigo-300' /></td>
       
        </tr>
      
      
      

       
      </tbody>
      <tfoot>
        <tr className='border-t border-gray-100 bg-gray-50'>
          <td className='px-6 py-4 flex items-center gap-3'>
            <button className='text-xs font-medium text-indigo-500 uppercase tracking-wider hover:text-indigo-700 transition-colors '></button>
            <span className='text-2xl font-bold text-gray-50'></span>

          </td>
        </tr>
        
      </tfoot>

    </table>
    </div>
    </div>
    
  )
}

export default Salesapp 

