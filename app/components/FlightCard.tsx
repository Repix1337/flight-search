import React from "react";

interface Props {
    name: string;
    image: string
}

const FlightCard:React.FC<Props> = ({name,image}) => {
  return (
    <div className="carousel-item card text-primary-content w-96 bg-primary m-10">
      <figure>
        <img
          src={image}
          alt={name}
          className="h-56 w-full"
        />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{name}</h1>
        <p>Idealne miejsce na wakacje</p>
        <div className="card-actions justify-end">
          <button className="btn btn-accent">Book it</button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
