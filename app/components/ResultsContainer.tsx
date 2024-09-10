'use client';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import FlightResults from './FlightResults';
import Filters from './Filters';

const SearchPageResultsContainer = () => {
  const searchParams = useSearchParams();
  const departure = searchParams.get('departure');
  const arrival = searchParams.get('arrival');
  const arrivalDate = searchParams.get('arrivalDate');
  const departureDate = searchParams.get('departureDate');
  const [flights, setFlights] = useState<FlightSearchData | undefined>(undefined);
  const handleSearch = async () => {
   try {
       const response = await fetch(`/api/searchFlights?arrival=${arrival}&departure=${departure}&departureDate=${departureDate}&arrivalDate=${arrivalDate}`);
       
       // Check if the response is JSON
       const contentType = response.headers.get('content-type');
       if (contentType && contentType.includes('application/json')) {
           const data = await response.json();
           setFlights(data);

           console.log(data);
       } else {
           throw new Error('Response is not JSON');
       }
   } catch (error) {
       console.error('Error fetching flight data:', error);
       setFlights(undefined); // Handle the error state
   }
};
useEffect(() => {
  if (departure && arrival && departureDate && arrivalDate) {
    handleSearch();
  }
}, [departure, arrival, departureDate, arrivalDate]); 
  return (
    <div className='w-screen flex'>
      <Filters/>
      {flights ? 
      <FlightResults flights={flights}/>
      : 
      <div>No Flights available</div>}
    </div>
  )
}

export default SearchPageResultsContainer