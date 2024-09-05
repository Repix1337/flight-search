'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import FlightResults from './FlightResults';

const SearchPageResultsContainer = () => {
  const searchParams = useSearchParams();
  const departure = searchParams.get('departure');
  const arrival = searchParams.get('arrival');
  const arrivalDate = searchParams.get('arrivalDate');
  const departureDate = searchParams.get('departureDate');
  return (
    <div className='w-screen bg-primary flex'>
      <div className='w-1/3 bg-accent h-[50vh] text-primary-content'>Filtry</div>
      <FlightResults departure={departure} arrival={arrival} arrivalDate={arrivalDate} departureDate={departureDate}/>
    </div>
  )
}

export default SearchPageResultsContainer