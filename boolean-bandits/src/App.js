import React, {useState, useEffect} from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import AppLocation from './AppLocation';
import Nasa from './components/NASA';
import APIweather from './components/Weather/API weather';

function App(props) {

  
      
    
    return (
      <div className="App">
      <h1>Boolean Bandits!</h1>
      <AppLocation />
      <Nasa/>
      <APIweather />
      </div>
    
    );
  }


export default App;
