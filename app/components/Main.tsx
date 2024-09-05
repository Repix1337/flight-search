'use client';
import React, { use, useState } from 'react'
import Search from './Search'
import Link from 'next/link'

type Props = {
  departure: string
  arrival: string
}
const Main = () => {
  const [departure, setDeparture] = useState("")
  const [arrival, setArrival] = useState("")
  const props: Props = {departure,arrival}
  const handleDepartureInput = (e:any) => {
    setDeparture(e.target.value);
  }
  const handleArrivalInput = (e:any) => {
    setArrival(e.target.value);
  }
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
        <Search name='Departure' onChange={handleDepartureInput}/>
        <Search name='Arrival' onChange={handleArrivalInput}/>
        <Link href={{ pathname: '/SearchPage', query: props}}><input type='submit' value={"Submit"} className='btn btn-primary'/></Link>
        </div>
      </div>
    </div>
  )
}

export default Main