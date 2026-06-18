import React from 'react'

function Nicerow3() {
  return (
    <div className='h-[500px] w-full '>
        <section className='h-[220px] w-[full] flex text-center justify-around items-center gap-[40px]'>
            <section className='h-[190px] w-[23%] bg-pink-700 bg-[url("office1.jpg")] bg-cover'></section>
            <section className='h-[190px] w-[23%] bg-emerald-300  bg-[url("office2.jpg")] bg-cover'></section>
            <section className='h-[190px] w-[23%] bg-black  bg-[url("office5.jpg")] bg-cover'></section>
        </section>
       <section className='h-[220px] w-[full] flex text-center justify-around mt-[20px] gap-[40px]'>
             <section className='h-[190px] w-[23%] bg-white '>
                <h1 className='text-2xl'>ALIGNMENT</h1>
                <h5>✅ Lorem ipsum dolor</h5>
                <h5>✅ Elit, sed do eiusmod</h5>
                <h5>✅ Ut enim ad minim</h5>
                <h5>✅ Nisi ut commodo</h5>
                <h5>✅ Excepteur sint occa</h5>
             </section>
            <section className='h-[190px] w-[23%] bg-white  justify-center items-center ml-0'>
                <h1 className='text-2xl'>GROW</h1>
                <h5>✅ Lorem ipsum dolor</h5>
                <h5>✅ Elit, sed do eiusmod</h5>
                <h5>✅ Ut enim ad minim</h5>
                <h5>✅ Nisi ut commodo</h5>
                <h5>✅ Excepteur sint occa</h5>
            </section>
            <section className='h-[190px] w-[23%] bg-white '>
                <h1 className='text-2xl'>DIGITAL</h1>
                <h5>✅ Lorem ipsum dolor</h5>
                <h5>✅ Elit, sed do eiusmod</h5>
                <h5>✅ Ut enim ad minim</h5>
                <h5>✅ Nisi ut commodo</h5>
                <h5>✅ Excepteur sint occa</h5>
            </section>
       </section>
        <button className='h-[60px] bg-red-900 w-[210px] text-white flex justify-center items-center text-center ml-[600px] border-4 rounded-2xl text-[20px]'>LEARN MORE</button>



    </div>
  )
}

export default Nicerow3