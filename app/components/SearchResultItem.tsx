import React from 'react';

interface SearchResultItemProps {
  flights: FlightSearchData;
}


const SearchResultItem: React.FC<SearchResultItemProps> = ({ flights }) => {
  // Example of rendering flight information
  return (
    <div className='search-result-item'>
      <h2>Best Flights</h2>
      {flights.best_flights.map((flight, index) => (
        <div key={index} className='flight'>
          <h3>Flight {index + 1}</h3>
          <p>Price: ${flight.price}</p>
          <p>Duration: {flight.total_duration} minutes</p>
          <img src={flight.airline_logo} alt={`Airline logo for flight ${index + 1}`} />
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default SearchResultItem;
