import React from 'react'
interface Props {
  departure: any;
  arrival: any;
  departureDate: any;
  arrivalDate: any;
}
const FlightResults:React.FC<Props> = ({arrival, departure,departureDate,arrivalDate}) => {
  return (
    <div className='w-2/3 bg-primary h-[50vh] text-primary-content'>
      {arrival} {departure} {departureDate} {arrivalDate}
    </div>
  )
}

export default FlightResults