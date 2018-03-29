import React from 'react';
import './components.css';

export default function Booking({isBooked = false}) {  
  const buttonText = (isBooked) ? "Already booked" : "Book now";

  return (
    <div className="Booking">
      <button disabled={isBooked} className="Booking-button">{buttonText}</button>
    </div>
  ); 
};