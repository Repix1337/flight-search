import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar bg-primary flex items-center justify-center gap-4   h-[10vh]'>
        <button className='btn btn-secondary font-extrabold text-white'>Home</button>
        <button className='btn btn-secondary font-extrabold text-white'>Cheap</button>
        <button className='btn btn-secondary font-extrabold text-white'>Popular</button>
        <button className='btn btn-secondary font-extrabold text-white'>Reccomended</button>
        <button className='btn btn-secondary font-extrabold text-white'>Why us?</button>
        <button className='btn btn-secondary font-extrabold text-white'>Contact</button>
    </div>
  )
}

export default Navbar