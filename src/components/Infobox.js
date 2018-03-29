import React from 'react';
import './components.css';

export default function Infobox ({infos}){
  const list = infos.split(",").map((item, index) => <li key={ "#" + index }>{item}</li>);
  
  return (
    <div className="Infobox">
      <span>Additional Information:</span>
      <ul>
        {list}
      </ul>
    </div>
  );
}