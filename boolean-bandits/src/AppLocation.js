import React, { useEffect, useState } from 'react';

const AppLocation=() => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  
  
  const GetLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }
  
  return (
    <div className="App">
      <button onClick={GetLocation}>Get Location</button>
      <h1>Coordinates</h1>
      <p>{status}</p>
      <p>{lat}</p>
      <p>{lng}</p>
    </div>
  );
}

export default AppLocation;






























































