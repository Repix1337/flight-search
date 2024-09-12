import React from "react";
interface Props {
  onChange: any
  durationChange: any
  layoverChange:any
  currencyChange:any
}
const Filters:React.FC<Props> = ({onChange, durationChange, layoverChange,currencyChange}) => {
  return (
    <div className="w-1/4 bg-primary  text-primary-content">
      <h1 className="text-6xl font-bold text-center">Filters</h1>
      <h1 className="text-4xl font-bold">Price:</h1>
      <div>
      <div className="flex w-full justify-between px-2 text-xs">
            <span>200</span>
            <span>400</span>
            <span>600</span>
            <span>800</span>
            <span>1000</span>
            <span>1200</span>
            <span>1400</span>
            <span>1600</span>
            {" "}
          </div>
        <input
          type="range"
          className=" range range-accent"
          min={200}
          max={1600}
          step="200"
          onChange={onChange}
        />
          <div className="flex w-full justify-between px-2 text-xs">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            
            {" "}
          </div>
        </div>
        <h1 className="text-3xl font-bold">Duration:</h1>
      <div>
      <div className="flex w-full justify-between px-2 text-xs">
            <span>3h</span>
            <span>6h</span>
            <span>9h</span>
            <span>12h</span>
            <span>15h</span>
            <span>18h</span>
            <span>21h</span>
            <span>24h</span>
            {" "}
          </div>
        <input
          type="range"
          className=" range range-accent"
          min={3}
          max={24}
          step="3"
          onChange={durationChange}
        />
          <div className="flex w-full justify-between px-2 text-xs">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            
            {" "}
          </div>
        </div>
        <p className="text-3xl font-bold flex items-center gap-2">Layover <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" onChange={layoverChange}/></p>
        <p className="text-3xl font-bold flex items-center gap-2">
        <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1">Currency</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><button onClick={currencyChange} value={"USD"}><a>USD</a></button></li>
    <li><button onClick={currencyChange} value={"PLN"}><a>PLN</a></button></li>
    <li><button onClick={currencyChange} value={"GBP"}><a>GBP</a></button></li>
    <li><button onClick={currencyChange} value={"EUR"}><a>EUR</a></button></li>
  </ul>
</div>
          </p>      
      </div>
  );
};

export default Filters;
