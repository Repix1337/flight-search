import FlightResultsItems from "./FlightResultsItems"; 

interface Props {
  flights: FlightSearchData | undefined;
  maxPrice: number;
  maxDuration: number;
  layovers: boolean;
  currencyExchangeRate: ExchangeRateAPIResponse | undefined;
  currency: string;
}

const FlightResults: React.FC<Props> = ({
  flights,
  maxPrice,
  maxDuration,
  layovers,
  currencyExchangeRate,
  currency,
}) => {
  return (
    <div className="w-3/4 p-2">
      {flights ? (
        <div>
          <FlightResultsItems
            flights={flights}
            maxPrice={maxPrice}
            maxDuration={maxDuration}
            layovers={layovers}
            currencyExchangeRate={currencyExchangeRate}
            currency={currency}
          />
        </div>
      ) : (
        <p>No flight data available</p>
      )}
    </div>
  );
};

export default FlightResults;
