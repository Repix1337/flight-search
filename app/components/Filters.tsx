import React from "react";

interface Props {
  onChange: any;
  durationChange: any;
  layoverChange: any;
  currencyChange: any;
  sortChange: any;
  selectedPrice: number;
  currencyExchangeRate: ExchangeRateAPIResponse | undefined;
  currency: string;
}

const Filters: React.FC<Props> = ({selectedPrice,currency, onChange, durationChange,
   layoverChange, currencyChange, sortChange,
   currencyExchangeRate }) => {
  const priceSteps = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
     1400, 1500, 1600, 1700, 1800, 1900, 2000];
  const durationSteps = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];

  return (
    <div className="w-1/4 bg-primary text-primary-content p-4">
      <h1 className="text-6xl font-bold text-center">Filters</h1>

      {/* Price Range */}
      <h1 className="text-4xl font-bold">Max Price:</h1>
      <div>
        <span>{currencyExchangeRate?.conversion_rates
                  ? Math.floor(
                    selectedPrice  *
                        currencyExchangeRate?.conversion_rates[currency]
                    )
                  : selectedPrice} {currency}</span>
        <input
          type="range"
          className="range range-accent"
          min={100}
          max={2000}
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
        <div className="flex w-full justify-between px-2 text-xs gap-2">
          {durationSteps.map(step => (
            <span key={step}>{step}h</span>
          ))}
        </div>
        <input
          type="range"
          className="range range-accent"
          min={3}
          max={36}
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
        <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" onChange={layoverChange} />
      </p>

      {/* Currency Dropdown */}
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn btn-accent m-1">Currency</div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li><button onClick={currencyChange} value={"USD"}><a>USD</a></button></li>
          <li><button onClick={currencyChange} value={"PLN"}><a>PLN</a></button></li>
          <li><button onClick={currencyChange} value={"GBP"}><a>GBP</a></button></li>
          <li><button onClick={currencyChange} value={"EUR"}><a>EUR</a></button></li>
        </ul>
      </div>

      {/* Sort Dropdown */}
      <div>
        <select id="options" className="select select-primary w-full max-w-xs" onChange={sortChange}>
          <option disabled selected value="none">Sort by</option>
          <option value="cheapest">Cheapest flights</option>
          <option value="shortest">Shortest flights</option>
          <option value="direct">Direct flight</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
