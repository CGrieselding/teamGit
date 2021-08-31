import React, {useState, useEffect} from 'react';
import AppLocation from './components/Location/AppLocation';
// import GetLocation from './components/Location/GeoLocation';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nasa from './components/NASA';
import APIweather from './components/Weather/API weather';

function App() {
	const lon = -111.0937
	const lat = 39.3210
  return (
    <div className="App">
      <h1>Boolean Bandits!</h1>
			<Nasa lon={ lon } lat={ lat }/>
      <AppLocation/>
      <APIweather />
      {/* <TicketMaster /> */}
      </div>
       
    );
  }

export default App;







