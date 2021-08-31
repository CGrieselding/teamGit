import React, { useState } from 'react';
import {Button} from 'reactstrap'
import AppLocation from '../../AppLocation';





const APIweather = (props) => {
  const [weather, setWeather] = useState([])
  const key = 'e51267c357017ca3a21eada5bfb90157' 
  const baseURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lng}&appid=${key}`
  


  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      setWeather(data.list[0].main.temp)
      console.log(data.list[1].main.temp)
      
    })
    .catch(err => console.log(err));

  
    
    
    return (
      <div className="main">
        <p>Temp: {((weather-273.15)*1.8)+32}</p>
        <p>Temp C: {weather}</p>
      </div>
);
};

export default APIweather;