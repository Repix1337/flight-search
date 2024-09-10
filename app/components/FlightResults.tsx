import OtherFlights from './SearchResultOtherFlights';
import BestFlights from './SearchResultsBestFlights';
interface Props {
  flights:FlightSearchData|undefined
}
const FlightResults:React.FC<Props> = ({flights}) => {
   
  return (
    <div className='w-3/4  '>
      {flights?.best_flights ? (
        <div >
          <h1 className='text-accent-content text-center text-6xl font-bold'>Best Flights</h1>
        <BestFlights flights={flights}/>
        </div>         
      ) : (
        <p>No best flights available</p>
      )}
      {flights?.other_flights ? (
        <div >
        <h1 className='text-accent-content text-center text-6xl font-bold'>Other Flights</h1>
        <OtherFlights flights={flights}/>
        </div>         
      ) : (
        <p>No flight data available</p>
      )}
    </div>
  )
}

export default FlightResults