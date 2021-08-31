import React, { useEffect, useState } from 'react';
import APIweather from './components/Weather/API weather';
import Nasa from './components/NASA';
import EventsApp from './components/TicketMaster/TicketMaster';

const AppLocation=() => {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [status, setStatus] = useState(null);
  
  
  const GetLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Checking...');
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
      <button onClick={GetLocation} className="myButton">Check Temperature</button>
      <p>{status}</p>
      <APIweather lat={lat} lng={lng}/>
      <Nasa lat={lat} lng={lng}/>
      <EventsApp />
    </div>
  );
}

export default AppLocation;