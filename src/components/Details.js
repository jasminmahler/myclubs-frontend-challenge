import React from 'react';

import './components.css';
import Infobox from './Infobox';
import marker from '../assets/marker.png';

export default function Details({ imageFile, description, name, partner, street, city, zipCode, infoBox }) {
  const imgStyle = {
    backgroundImage: `url(${imageFile})`
  };

  const additionalInfo = (infoBox) ? <Infobox infos={infoBox} /> : null;

  return (
    <div className="Details">
      <div className="Details-image" style={imgStyle}></div>
      <div className="Details-content">
        <h3>{name}</h3>
        <hr />
        <div className="Details-partner">
          <img src={marker} alt="locationmarker"/>
          <span>{partner}</span>
          <p>{street}, {zipCode} {city}</p>
        </div>
        <hr />
        <p>{description}</p>
        { additionalInfo }
      </div>
    </div>
  );
}