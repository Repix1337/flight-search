import React from 'react'
import Search from './Search'

const Main = () => {
  return (
    <div
      className="hero h-[50vh] "
      style={{
        backgroundImage: "url(https://preview.redd.it/qbrdv8m8yog41.jpg?auto=webp&s=60eb7a974cbf659ea457e3388169b71c8eb13ff8)",
      }}>
        <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-white text-center flex flex-col">
        <h1 className="text-8xl font-bold mb-3">Flight Search</h1>
        <div className='flex gap-4'>
        <Search name='Departure'/>
        <Search name='Arrival'/>
        <input type='submit' value={"Submit"} className='btn btn-primary'/>
        </div>
      </div>
    </div>
  )
}

export default Main