import React, { useState, useEffect } from 'react'

const key = 'gZ3CxAqb3eu9fI7btjH1QCchpT0SA8Q0wQUyihiF'

export default function Nasa(props) {
	// const [map, setMap] = useState('');
	let lng = props.lng
	let lat = props.lat


	fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${lng}&lat=${lat}&api_key=${key}`)
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

