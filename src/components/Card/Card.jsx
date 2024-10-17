import React from "react";
import "./Card.css";
import cars from "../CarData";

const Card = () => {
  return (
    <>
      {cars.map(car => (
        <div className="card mb-3" style={{ maxWidth: 1300 }} key={car.model}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={car.image.src}
                className="custom-img-fluid rounded-2"
                alt={car.image.alt}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">
                  {car.brand} {car.model}
                </h3>
                <div className="d-flex gap-4 car-specs">
                  <h5 className="card-title">
                    Horsepower: {car.horsepower} HP
                  </h5>
                  <span>•</span>
                  <h5 className="card-title">0-100km/h: {car["0-100 km/h"]}</h5>
                </div>

                <p className="card-text">{car.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
