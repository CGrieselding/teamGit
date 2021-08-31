import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
// import GetLocation from './components/Location/GeoLocation';
import AppLocation from "./components/Location/AppLocation";
import EventsApp from "./components/TicketMaster/TicketMaster";

function App() {
  return (
    <div className="App">
      <h1 className="mainTitle">Boolean Bandits</h1>
      <h6>⤪ Robbing API's One At A Time ⤨</h6>
      <hr />
      <br />
      <AppLocation />
      <hr />
      <br />
      <EventsApp />
    </div>
  );
}

export default App;








