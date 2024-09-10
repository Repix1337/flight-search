'use client';
import React, { useEffect, useState } from 'react'
import Search from './Search'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';

type Props = {
  departure: string
  arrival: string
  departureDate: string
  arrivalDate: string 
}
const Main = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const props: Props = {departure,arrival,departureDate,arrivalDate}
  const handleDepartureInput = (e:any) => {
    setDeparture(e.target.value);
  }
  const handleArrivalInput = (e:any) => {
    setArrival(e.target.value);
  }
  const handleArrivalDateInput = (e:any) => {
    setArrivalDate(e.target.value);
  }
  const handleDepartureDateInput = (e:any) => {
    setDepartureDate(e.target.value);
  }
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams !== null) {
      setDeparture(searchParams.get('departure') || '');
      setArrival(searchParams.get('arrival') || '');
      setDepartureDate(searchParams.get('departureDate') || '');
      setArrivalDate(searchParams.get('arrivalDate') || '');
    }
  }, [searchParams]);
  return (
    <div
      className="hero h-[50vh] "
      style={{
        backgroundImage: "url(https://preview.redd.it/qbrdv8m8yog41.jpg?auto=webp&s=60eb7a974cbf659ea457e3388169b71c8eb13ff8)",
      }}>
        <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-white text-center flex flex-col w-screen">
        <h1 className="text-8xl font-bold mb-3">Flight Search</h1>
        <form>
        <div className='flex gap-4'>
        <Search name='Departure' onChange={handleDepartureInput} value={departure}/>
        <Search name='Arrival' onChange={handleArrivalInput} value={arrival}/>
        <input type='date' className='text-accent-content' onChange={handleDepartureDateInput} value={departureDate}/>
        <input type='date' className='text-accent-content' onChange={handleArrivalDateInput} value={arrivalDate}/>
        <Link href={{ pathname: '/SearchPage', query: props}}><input type='submit' value={"Submit"} className='btn btn-primary text-white'/></Link>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Main