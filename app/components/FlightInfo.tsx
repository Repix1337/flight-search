'use client';
import React, { useEffect, useState } from 'react';

// Define TypeScript types
type Airport = {
  name: string;
  id: string;
  time: string;
};

type Flight = {
  departure_airport: Airport;
  arrival_airport: Airport;
  duration: number;
  airplane: string;
  airline: string;
  airline_logo: string;
  travel_class: string;
  flight_number: string;
  legroom: string;
  extensions: string[];
};

type CarbonEmissions = {
  this_flight: number;
  typical_for_this_route: number;
  difference_percent: number;
};

type FlightData = {
  flights: Flight[];
  total_duration: number;
  carbon_emissions: CarbonEmissions;
  price: number;
  type: string;
  airline_logo: string;
  departure_token: string;
  isBest: boolean;
};

const FlightInfo: React.FC = () => {
  const [flightData, setFlightData] = useState<FlightData | null>(null);

  useEffect(() => {
    // Retrieve the query string from the URL
    const search = window.location.search;
    
    // Extract the part of the query string after the "?"
    const jsonString = search.substring(1);

    if (jsonString) {
      try {
        // Decode the URI component to handle special characters
        const decodedJson = decodeURIComponent(jsonString);
        // Parse the decoded JSON string
        const parsedData: FlightData = JSON.parse(decodedJson);
        // Set the flight data to state
        setFlightData(parsedData);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    }
  }, []);

  if (!flightData) {
    return <div>Loading...</div>;
  }

  const flight = flightData.flights[0]; // Assuming you want the first flight in the array
  const carbonEmissions = flightData.carbon_emissions;
  const price = flightData.price;
  const isBest = flightData.isBest;

  return (
    <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1798755354.jpg?c=16x9&q=h_833,w_1480,c_fill"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">{flight.departure_airport.name}=&gt;{flight.arrival_airport.name}</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default FlightInfo;
