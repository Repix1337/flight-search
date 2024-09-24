"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import FlightResults from "./FlightResults";
import Filters from "./Filters";

const SearchPageResultsContainer = () => {
  const searchParams = useSearchParams();
  const departure = searchParams.get("departure");
  const arrival = searchParams.get("arrival");
  const arrivalDate = searchParams.get("arrivalDate");
  const departureDate = searchParams.get("departureDate");
  const [flights, setFlights] = useState<FlightSearchData | undefined>(
    undefined
  );
  const [maxPrice, setMaxPrice] = useState(2600);
  const [maxDuration, setMaxDuration] = useState(36);
  const [layovers, setLayovers] = useState(true);
  const [sort, setSort] = useState("none");
  const [currency, setCurrency] = useState("USD");
  const [currencyExchangeRate, setCurrencyExchangeRate] = useState<
    ExchangeRateAPIResponse | undefined
  >(undefined);
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `/api/searchFlights?arrival=${arrival}&departure=${departure}&departureDate=${departureDate}&arrivalDate=${arrivalDate}`
      );

      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        setFlights(data);

        console.log(data);
      } else {
        throw new Error("Response is not JSON");
      }
    } catch (error) {
      console.error("Error fetching flight data:", error);
      setFlights(undefined); // Handle the error state
    }
  };
  useEffect(() => {
    if (departure && arrival && departureDate && arrivalDate) {
      handleSearch();
    }
  }, [departure, arrival, departureDate, arrivalDate]);
  const handlePriceChange = (e: any) => {
    setMaxPrice(e.target.value);
  };
  const handleDurationChange = (e: any) => {
    setMaxDuration(e.target.value);
  };
  const handleLayovers = () => {
    layovers ? setLayovers(false) : setLayovers(true);
  };
  const handleSorting = (e: any) => {
    setSort(e.target.value)
  }
  const exchangeRateConnection = async () => {
    try {
        const response = await fetch(`/api/exchangeRate?currency=${currency}`);

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            setCurrencyExchangeRate(data);

            console.log(data);
        } else {
            throw new Error("Response is not JSON");
        }
    } catch (error) {
        console.error("Error fetching exchange rate data:", error);
        setCurrencyExchangeRate(undefined); // Handle the error state
    }
};

  useEffect(() => {
    if (currency) {
      exchangeRateConnection();
    }
  }, [currency]);
  const handleCurrencyChange = (e: any) => {
    setCurrency(e.target.value);
  };
  return (
    <div className="w-screen flex">
      <Filters
        onChange={handlePriceChange}
        durationChange={handleDurationChange}
        layoverChange={handleLayovers}
        currencyChange={handleCurrencyChange}
        sortChange={handleSorting}
        selectedPrice={maxPrice}
        selectedDuration={maxDuration}
        currencyExchangeRate={currencyExchangeRate}
        currency={currency}
      />
      {flights ? (
        <FlightResults
          flights={flights}
          maxPrice={maxPrice}
          maxDuration={maxDuration}
          layovers={layovers}
          currencyExchangeRate={currencyExchangeRate}
          currency={currency}
          sorting={sort}
        />
      ) : (
        <div>No Flights available</div>
      )}
    </div>
  );
};

export default SearchPageResultsContainer;
