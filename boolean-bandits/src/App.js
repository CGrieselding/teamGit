import React, {useState, useEffect} from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Nasa from './components/NASA';

function App() {
	const lon = -111.0937
	const lat = 39.3210
  return (
    <div className="App">
      <h1>Boolean Bandits!</h1>
			<Nasa lon={ lon } lat={ lat }/>

// import GetLocation from './components/Location/GeoLocation';
import AppLocation from './components/Location/AppLocation';




function App() {
  
 

  
  return (
    <div className="App">
    <h1>Boolean Bandits!</h1>
    <AppLocation/>
    <div>
    

    </div>

    </div>
    
    );
  }

export default App;
