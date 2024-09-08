import React, { useEffect, useState } from 'react'
import SearchResultItem from './SearchResultItem';
interface Props {
  departure: any;
  arrival: any;
  departureDate: any;
  arrivalDate: any;
}
const FlightResults:React.FC<Props> = ({arrival, departure,departureDate,arrivalDate}) => {
   const [flights, setFlights] = useState(null);
   const [count, setCount] = useState(0);
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
        setFlights(null); // Handle the error state
    }
};

  const callSearch = () => {
    if(count === 0){
      setCount(1);
      handleSearch();
    }
  }
  callSearch();
  console.log(count)
  console.log(flights);
  return (
    <div className='w-2/3 bg-primary h-[50vh] text-primary-content'>
      {flights ? (
        <SearchResultItem flights={flights} />
      ) : (
        <p>No flight data available</p>
      )}
    </div>
  )
}

export default FlightResults