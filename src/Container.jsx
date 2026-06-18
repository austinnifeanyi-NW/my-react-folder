import React from 'react'

function Container() {
  return (
    <div className=' h-[200px] grid grid-cols-4 gap-1.5 mt-3'>
        <section className=' bg-indigo-400'></section>
        <section className=' bg-green-400'>
            <img src="camels.jpg" className=" h-[100px]" />
        </section>
        <section className=' bg-[#0000008e] bg-blend-darken bg-[url("desert.jpg")] text-white bg-cover'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, officiis.
        </section>
        <section className=' bg-blue-800'></section>
    </div>
  )
}

export default Container