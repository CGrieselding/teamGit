import React, {useState, useEffect} from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import AppLocation from './AppLocation';
import Nasa from './components/NASA';
import APIweather from './components/Weather/API weather';
import AppLocation from './AppLocation';

function App() {
  
    // const [lat, setLat] = useState('');
    // const [lng, setLng] = useState('');
    // const [status, setStatus] = useState(null);
    
    
    // const GetLocation = () => {
    //   if (!navigator.geolocation) {
    //     setStatus('Geolocation is not supported by your browser');
    //   } else {
    //     setStatus('Locating...');
    //     navigator.geolocation.getCurrentPosition((position) => {
    //       setStatus(null);
    //       setLat(position.coords.latitude);
    //       setLng(position.coords.longitude);
    //     }, () => {
    //       setStatus('Unable to retrieve your location');
    //     });
    //   }
    // }

      return (
      <div className="App">
      <h1>Boolean Bandits!</h1>
        <AppLocation/>
      </div>
    
    );
  
}


export default App;
