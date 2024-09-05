import React from "react";
import FlightCard from "./FlightCard";
interface Props {
  title: string;
}
const FlightPanel:React.FC<Props> = ({title}) => {
  return (
    <div>
        <h1 className="text-6xl bg-primary text-white p-3 font-bold">{title}</h1>
    <div className="carousel w-full bg-primary scrollbar scrollbar-thin scrollbar-thumb whitespace-nowrap">
      <FlightCard
        name="Warsaw"
        image="https://s.inyourpocket.com/img/text/poland/warsaw/warsaw-city-centre_drone-in-warsaw-2.jpg"
      />
      <FlightCard
        name="New York"
        image="https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty_2x1.jpg"
      />
      <FlightCard
        name="Tokyo"
        image="https://www.gotokyo.org/en/destinations/southern-tokyo/images/499_0354_2.jpg"
      />
      <FlightCard
        name="Paris"
        image="https://t4.ftcdn.net/jpg/02/96/15/35/360_F_296153501_B34baBHDkFXbl5RmzxpiOumF4LHGCvAE.jpg"
      />
      <FlightCard
        name="London"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg"
      />
      <FlightCard
        name="Sydney"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/800px-Sydney_Opera_House_-_Dec_2008.jpg"
      />
      <FlightCard
        name="Dubai"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg/640px-Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg"
      />
      <FlightCard
        name="Rome"
        image="https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-1?wid=1600&hei=900&fit=constrain,1&fmt=webp"
      />
      <FlightCard
        name="Istanbul"
        image="https://ychef.files.bbci.co.uk/1280x720/p0j759k4.jpg"
      />
      <FlightCard
        name="Hong Kong"
        image="https://cdn.britannica.com/96/84796-050-C4DEA436/Hong-Kong-Island-Victoria-Peak.jpg"
      />
      <FlightCard
        name="Rio de Janeiro"
        image="https://europa-swiat.um.warszawa.pl/documents/14548645/15990123/rio.jpg/ddeb87f1-d443-b6a9-7ae4-8ab16a43b142?version=1.0&t=1614690007093"
      />
      <FlightCard
        name="Cape Town"
        image="https://www.micato.com/wp-content/uploads/2018/09/cape-town-1-2-1110x700.jpg"
      />
    </div>
    </div>
  );
};

export default FlightPanel;
