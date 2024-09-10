import React from "react";
interface Props {
  onChange: any
  durationChange: any
}
const Filters:React.FC<Props> = ({onChange, durationChange}) => {
  return (
    <div className="w-1/4 bg-primary  text-primary-content">
      <h1 className="text-5xl font-bold">Price:</h1>
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
        <h1 className="text-5xl font-bold">Duration:</h1>
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
      </div>
  );
};

export default Filters;
