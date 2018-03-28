import React from 'react';

import './containers.css';
import Details from '../components/Details';
import Map from '../components/Map';

class Activity extends React.Component {
  componentDidMount() {
    // TODO: fetch data from backend
  }

  render() {
    // initial test data
    const activity = {
      city:"Vösendorf",
      description:"a high-intensity fitness programme incorporating elements from several sports and types of exercise.",
      imageFile: "https://files.myclubs.com/img_2c8352871c8e12db4244dd016d746377.jpg",
      infoBox:"For advanced users only, please be early, bring a towel",
      location:{
        latitude:48.1141557,
        longitude:16.318269800000053
      },
      name:"Crossfit",
      partner:"MyClubs Crossfit Studio",
      street:"Nordring 8",
      zipCode:"2334"
    };

    return (
      <div>
        <Details {...activity}/>
          <Map 
            {...activity}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyATPxE5CjvauOTdNkC5UWrrrLNhfBI3ftk&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div className="Activity-map" />}
            mapElement={<div style={{ height: `100%` }} />} />
      </div>
    ); 
  }
};

export default Activity;