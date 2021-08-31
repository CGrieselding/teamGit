import React, { useState } from 'react';

const key = 'e51267c357017ca3a21eada5bfb90157'
const baseURL = `https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=50&appid=${key}`

const APIweather = () => {
  const [weather, setWeather] = useState([]);
  fetch(baseURL)
    .then(res => res.json())
        .then(data => {
          setWeather(data.list[0].main.temp)
      console.log(data.list[0].main.temp)
    })

    .catch(err => console.log(err));

  return (
    <div className="main">
    <p>tempF{((weather-273.15)*1.8)+32}</p>
    <p>tempC{weather-273.15}</p>    
    <button id="button">toggle</button>
    </div>
  );
}
export default APIweather;
