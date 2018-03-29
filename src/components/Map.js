import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withScriptjs(withGoogleMap(({location}) => {
  const position = { lat: parseFloat(location.latitude), lng: parseFloat(location.longitude) };

  return (
    <GoogleMap defaultZoom={10} defaultCenter={position}>
      <Marker position={position} />
    </GoogleMap>
  );
}));

export default Map;