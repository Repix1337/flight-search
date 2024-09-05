import ContactPanel from "./components/ContactPanel";
import FlightPanel from "./components/FlightPanel";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import TextPanel from "./components/TextPanel";

export default function Home() {
  return (
    <div className="h-screen w-screen ">
      <Navbar/>
      <Main/>
      <FlightPanel title="Cheapest Flights"/>
      <FlightPanel title="Most Popular"/>
      <FlightPanel title="Our Favourites"/>
      <TextPanel/>
      <ContactPanel/>
      <Footer/>
    </div>
  );
}
