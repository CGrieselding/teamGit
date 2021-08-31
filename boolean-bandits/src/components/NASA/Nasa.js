import React, { useState, useEffect } from 'react'

export default function Nasa( {lon, lat} ){
	const [url, setURL] = useState('');
	useEffect(() => {
		console.log(lon)
		fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&api_key=gmoD7XvhLPZd6it0W6VGWfBdjmeKDPT9xIZQGug3`)
		.then(res => res.json())
		.then(data => setURL(data.url))

	})
	return (

			<img src={ url } style={{ width: 200}}/>

	)
}


