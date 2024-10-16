import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: 940 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1672400853593-a57147b50688"
              className="custom-img-fluid rounded-2"
              alt="Audi RS3"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex flex-column">
              <h3 className="card-title">Audi RS3</h3>
              <div className="d-flex gap-4">
                <h5 className="card-title">Horsepower: 400hp</h5>
                <h5 className="card-title">0-100km/h: 3.8s</h5>
              </div>

              <p className="card-text">
                The Audi RS3 is a high-performance compact car known for its
                impressive acceleration and handling. The Audi RS3 is a
                high-performance compact car known for its impressive
                acceleration and handling. The Audi RS3 is a high-performance
                compact car known for its impressive acceleration and handling.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3" style={{ maxWidth: 940 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1601278840447-9af5ac4ed157"
              className="custom-img-fluid rounded-2"
              alt="Audi RS3"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex flex-column">
              <h3 className="card-title">Audi RS3</h3>
              <div className="d-flex gap-4">
                <h5 className="card-title">Horsepower: 400hp</h5>
                <h5 className="card-title">0-100km/h: 3.8s</h5>
              </div>

              <p className="card-text">
                The Audi RS3 is a high-performance compact car known for its
                impressive acceleration and handling. The Audi RS3 is a
                high-performance compact car known for its impressive
                acceleration and handling. The Audi RS3 is a high-performance
                compact car known for its impressive acceleration and handling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
