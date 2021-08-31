import React, { useState, useEffect } from 'react'
import AppLocation from '../../AppLocation';

const key = 'gZ3CxAqb3eu9fI7btjH1QCchpT0SA8Q0wQUyihiF'

export default function Nasa(props) {
	// const [map, setMap] = useState('');
	let lng = props.lng
	let lat = props.lat


	fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${lng}&lat=${lat}&date=2014-02-01&api_key=${key}`)
		.then(res => res.blob())
		.then(imgBlob => {
			let imageURL = URL.createObjectURL(imgBlob);
			console.log(imageURL)
			// console.log(data.url)
		}) 

		
		return (
			<div>
	
	</div>

)

}

