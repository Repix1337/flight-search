import React from "react";

interface Props {
  onChange: any;
  durationChange: any;
  layoverChange: any;
  currencyChange: any;
  sortChange: any;
  selectedPrice: number;
  selectedDuration: number;
  currencyExchangeRate: ExchangeRateAPIResponse | undefined;
  currency: string;
}

const Filters: React.FC<Props> = ({
  selectedPrice,
  currency,
  selectedDuration,
  onChange,
  durationChange,
  layoverChange,
  currencyChange,
  sortChange,
  currencyExchangeRate,
}) => {
  const priceSteps = [
    100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400,
    1500, 1600, 1700, 1800, 1900, 2000,
  ];
  const durationSteps = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];

  return (
    <div className="w-1/4 flex flex-col text-primary-content p-4 gap-2">
      <h1 className="text-6xl font-bold text-center">Filters</h1>

      {/* Price Range */}
      <h1 className="text-4xl font-bold">Max Price:</h1>
      <div>
        <span>
          {currencyExchangeRate?.conversion_rates
            ? Math.floor(
                selectedPrice * currencyExchangeRate?.conversion_rates[currency]
              )
            : selectedPrice}{" "}
          {currency}
        </span>
        <input
          type="range"
          className="range range-primary"
          min={100}
          max={2000}
          value={selectedPrice}
          step="100"
          onChange={onChange}
        />
        <div className="flex w-full justify-between px-2 text-xs">
          {priceSteps.map(() => (
            <span key={Math.random()}>|</span>
          ))}
        </div>
      </div>

      {/* Duration Range */}
      <h1 className="text-3xl font-bold">Duration:</h1>
      <div>
        <span>{selectedDuration} h</span>
        <input
          type="range"
          className="range range-primary"
          min={3}
          max={36}
          value={selectedDuration}
          step="3"
          onChange={durationChange}
        />
        <div className="flex w-full justify-between px-2 text-xs">
          {durationSteps.map(() => (
            <span key={Math.random()}>|</span>
          ))}
        </div>
      </div>

      {/* Layover Checkbox */}
      <p className="text-3xl font-bold flex items-center gap-2">
        Layover
        <input
          type="checkbox"
          defaultChecked
          className="checkbox checkbox-primary"
          onChange={layoverChange}
        />
      </p>

      
      <div className="dropdown flex flex-col gap-2">
  {/* Currency Dropdown */}
  <div>
    <select
      id="currency-options"
      className="select select-primary w-full max-w-xs"
      onChange={currencyChange}
    >
      <option value="USD">USD</option>
      <option value="PLN">PLN</option>
      <option value="GBP">GBP</option>
      <option value="EUR">EUR</option>
    </select>
  </div>

  {/* Sort Dropdown */}
  <div >
    <select
      id="options"
      className="select select-primary w-full max-w-xs"
      onChange={sortChange}
    >
      <option disabled selected value="none">
        Sort by
      </option>
      <option value="cheapest">Cheapest flights</option>
      <option value="fastest">Shortest flights</option>
      <option value="layovers">Layovers</option>
      <option value="none">None</option>
    </select>
  </div>
</div>

    </div>
  );
};

export default Filters;
