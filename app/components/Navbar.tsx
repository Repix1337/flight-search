import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar bg-primary flex items-center justify-center gap-4   h-[10vh]'>
        <Link href={"./"}><button className='btn btn-accent font-extrabold text-accent-content'>Home</button></Link>
        <button className='btn btn-accent font-extrabold text-accent-content'>Cheap</button>
        <button className='btn btn-accent font-extrabold text-accent-content'>Popular</button>
        <button className='btn btn-accent font-extrabold text-accent-content'>Reccomended</button>
        <button className='btn btn-accent font-extrabold text-accent-content'>Why us?</button>
        <button className='btn btn-accent font-extrabold text-accent-content'>Contact</button>
    </div>
  )
}

export default Navbar