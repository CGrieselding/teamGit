import React from 'react';
import WeatherResults from './WeatherResults'

const baseURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=50&appid=e51267c357017ca3a21eada5bfb90157.json';
const WeatherApp = (props) => {
const 
    return (
        <div>
            {props.results.map(result => {
                return (
                    <div key={reults._id}>
                        <h3>{results.headline.main}</h3>
                        {result.multimedia.length > 1 ? <img alt="article" src={`http://www.APIweather.com/${result.multimedia[1].url}`} /> : }
                        <p>
                            {result.snippet}
                            <br />
                            {result.keywords.length > 0 ? ' Keywords:' : ''}
                        </p>
                        <ul>
                            {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
                        </ul>
                        <a href={result.web_url}><button>Read It</button></a>
                    </div>
                )
            })}
            <form>
                {
                    this.state.results.length > 0 ? <WeatherResults results={results} /> : null
                }
            </form>
        </div>
    );
};

export default WeatherApp;