import React from 'react';
import './TripCard.css';

const TripCard = ({ trip }) => {
  return (
    <div className="trip-card">
      <div className="trip-image" style={{ backgroundImage: `url(${trip.image})` }}>
        <span className="trip-price">${trip.price}</span>
      </div>
      <div className="trip-content">
        <h3>{trip.destination}</h3>
        <div className="trip-details">
          <span className="trip-duration">{trip.duration} days</span>
          <span className="trip-type">{trip.type}</span>
        </div>
        <p className="trip-description">{trip.description}</p>
        <button className="book-now-btn">Book Now</button>
      </div>
    </div>
  );
};

export default TripCard;