import React, {useState, useEffect} from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import GetLocation from './components/Location/GeoLocation';
import AppLocation from './components/Location/AppLocation';
import EventsApp from './components/TicketMaster/TicketMaster';




function App() {
  
 

  
  return (
    <div className="App">
    <h1>Boolean Bandits!</h1>
    <AppLocation/>
    <EventsApp />
    <div>
    

    </div>
    </div>
    
    );
  }

export default App;
