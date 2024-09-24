import React from "react";

interface Props {
  flights: FlightSearchData | undefined;
  maxPrice: number;
  maxDuration: number;
  layovers: boolean;
  currencyExchangeRate: ExchangeRateAPIResponse | undefined;
  currency: string;
  sort: string;
}

const FlightResults: React.FC<Props> = ({
  flights,
  maxPrice,
  maxDuration,
  layovers,
  currencyExchangeRate,
  currency,
}) => {
  // Function to format the time to display only the hour
  const formatTime = (time: string) => {
    return new Date(time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const renderFlightPanels = (
    flightData: FlightSearchData["best_flights" | "other_flights"],
    isBestFlights: boolean
  ) => {
    return flightData
      .filter((flight) => flight.price <= maxPrice)
      .filter(
        (flight) => Math.floor(flight.total_duration) / 60 <= maxDuration
      )
      .filter((flight) => (layovers ? true : !flight.layovers))
      .map((flight, index) => (
        <div
          key={index}
          className="flight w-3/4 justify-center flex flex-col bg-primary items-center border-black border rounded-xl m-2 bg-opacity-65"
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
              |Total: {segment.duration} Minutes
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
              <p>Total Duration: {Math.floor(flight.total_duration / 60)}h</p>
              {flight.layovers && flight.layovers.length > 0
                ? flight.layovers.map((layover, index) => (
                    <p key={index}>
                      Layover Duration: {Math.floor(layover.duration / 60)}h
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
    <div className="w-3/4 p-2">
      {flights ? (
        <div className="search-result-item flex flex-col items-center justify-center text-primary-content font-bold ">
          <h2 className="text-6xl font-bold">Flights:</h2>
          {renderFlightPanels(flights.best_flights, true)}
          {renderFlightPanels(flights.other_flights, false)}
        </div>
      ) : (
        <p>No flight data available</p>
      )}
    </div>
  );
};

export default FlightResults;
