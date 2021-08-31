import React, { useEffect, useState } from 'react';
import APIweather from './components/Weather/API weather';

const AppLocation=() => {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
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
      <APIweather lat={lat} lng={lng}/>
    </div>
  );
}

export default AppLocation;






























































