import React, { useEffect, useState } from 'react';
import APIweather from './components/Weather/API weather';
import Nasa from './components/NASA';

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
<<<<<<< HEAD:boolean-bandits/src/components/Location/AppLocation.js
      <h1 className="sectionTitle">Discover Your Exact Location...</h1>
      <button onClick={getLocation} className="myButton">Get Location</button>
=======
      <h1>Display</h1>
      <button onClick={GetLocation}>Get Location</button>
>>>>>>> 01ead46f499e03fd3e8480e38737d49df0d84a45:boolean-bandits/src/AppLocation.js
      <p>{status}</p>
      <APIweather lat={lat} lng={lng}/>
      <Nasa lat={lat} lng={lng}/>
    </div>
  );
}

export default AppLocation;






























































