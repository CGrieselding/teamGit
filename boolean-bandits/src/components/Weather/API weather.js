import React, { useState } from 'react';

const baseURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=50&appid=e51267c357017ca3a21eada5bfb90157'

// const key = 'e51267c357017ca3a21eada5bfb90157' 


const fetchResults = () => {
  let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;
  url = startDate ? url + `&begin_date=${startDate}` : url;
  url = endDate ? url + `&end_date=${endDate}` : url;

  const APIweather = () => {
    const [search, setSearch] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [pageNumber, setPageNumber] = useState('')
    const [results, setResults] = useState('')
  }

  fetch(url)
    .then(res => res.json())
    .then(data => setResults(data.response.docs))
    .catch(err => console.log(err));
};
const handlesSubmit = (event) => {
  event.preventDefault();
  this.fetchResults();
}

return (
  <div className="main">
    <div className="mainDiv">
      <form onSubmit={(e) => handlesSubmit(e)}>
        <span>Enter a single serach time (required) : </span>
        <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} required />
        <br />
        <span>Enter a start date: </span>
        <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(e) => setSearch(e.target.value)} />
        <br />
        <span>Enter a end Date: </span>
        <input type="date" name="endDate" pattern="[0-9]{8}" onChange={(e) => setSearch(e.target.value)} />
        <br />
        <button className="submit">Submit search</button>
      </form>
    </div>
  </div>
);
export default APIweather;