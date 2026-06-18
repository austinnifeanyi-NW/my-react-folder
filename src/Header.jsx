import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='py-4 flex justify-around bg-sky-500 text-white items-center'>
      <h1 className='text-3xl font-extrabold text-black'>Logo</h1>
      <nav className='hidden sm:block'>
        <ol className='flex gap-5'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Service">Service</Link></li>

        </ol>

      </nav>

    </header>
    
  )
}

export default Header