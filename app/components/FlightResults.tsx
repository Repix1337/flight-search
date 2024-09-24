import React from "react";

interface Props {
  flights: FlightSearchData | undefined;
  maxPrice: number;
  maxDuration: number;
  layovers: boolean;
  currencyExchangeRate: ExchangeRateAPIResponse | undefined;
  currency: string;
  sorting: string;
}

const FlightResults: React.FC<Props> = ({
  flights,
  maxPrice,
  maxDuration,
  layovers,
  currencyExchangeRate,
  currency,
  sorting,
}) => {
  // Function to format the time to display only the hour
  const formatTime = (time: string) => {
    return new Date(time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  const allFlights = [
    ...(flights?.best_flights.map((flight) => ({ ...flight, isBest: true })) ||
      []),
    ...(flights?.other_flights.map((flight) => ({
      ...flight,
      isBest: false,
    })) || []),
  ];
  const renderFlightPanels = (flightData: Flight[]) => {
    return flightData
      .sort((a: Flight, b: Flight) => {
        if (sorting === "cheapest") {
          return a.price - b.price; // Sort by cheapest price
        } else if (sorting === "fastest") {
          return a.total_duration - b.total_duration; // Sort by fastest flight (shortest duration)
        } else if (sorting === "layovers") {
          // Sort based on layovers, those without layovers should come first
          return a.layovers === b.layovers ? 0 : a.layovers ? 1 : -1;
        }
        return 0; // Default case: no sorting
      })
      .filter((flight) => flight.price <= maxPrice)
      .filter((flight) => Math.floor(flight.total_duration) / 60 <= maxDuration)
      .filter((flight) => (layovers ? true : !flight.layovers))
      .map((flight, index) => (
        <div
          key={index}
          className="flight w-4/5 justify-center flex flex-col  items-center border-black border rounded-xl m-2 bg-opacity-65"
        >
          {flight.flights.map((segment, segIndex) => (
            <div
              key={segIndex}
              className="flex items-center justify-center p-2 w-full"
            >
              <span className="font-extrabold">
                |{formatTime(segment.departure_airport.time)}
              </span>{" "}
              |{segment.departure_airport.name} =&gt;{" "}
              {segment.arrival_airport.name}|{" "}
              <span className="font-extrabold">
                {" "}
                {formatTime(segment.arrival_airport.time)}
              </span>
              {flight.layovers  ? (
                <span>|Total: {segment.duration} Minutes</span>
              ) : 
              null
              }
              
            </div>
          ))}
          <div className="flex gap-1">
            <img
              src={flight.airline_logo}
              className="w-12 h-12 bg-white rounded-xl border-black border p-2"
              alt={`Airline logo for flight ${index + 1}`}
            />
            <div className="flex flex-col items-center justify-center">
              <p>
                Price:{" "}
                {currencyExchangeRate?.conversion_rates
                  ? Math.floor(
                      flight.price *
                        currencyExchangeRate?.conversion_rates[currency]
                    )
                  : flight.price}{" "}
                {currency}
              </p>
              <p>
                Total Duration: {Math.floor(flight.total_duration / 60)}h{" "}
                {flight.total_duration % 60}m
              </p>
              {flight.layovers && flight.layovers.length > 0
                ? flight.layovers.map((layover, index) => (
                    <p key={index}>
                      Layover Duration: {Math.floor(layover.duration / 60)}h{" "}
                      {layover.duration % 60}m
                    </p>
                  ))
                : null}
            </div>
            <button className="btn btn-primary text-white font-extrabold  m-1 rounded-xl ">
              Book it
            </button>
          </div>
        </div>
      ));
  };

  return (
    <div className="w-full p-2">
      {flights ? (
        <div className="flex flex-col items-center justify-center text-primary-content font-bold ">
          <h2 className="text-6xl font-bold">Flights:</h2>
          {renderFlightPanels(allFlights)}
        </div>
      ) : (
        <p>No flight data available</p>
      )}
    </div>
  );
};

export default FlightResults;
