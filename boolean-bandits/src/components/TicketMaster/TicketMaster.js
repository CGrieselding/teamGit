import React, {useState, useEffect} from 'react';

const baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json'
const key = 'mFT9Itj9ZyuT0CWIPWtGLHIwi8T0OAku'

function EventsApp() {

    const [event, setEvent] = useState([])

    const fetchEvents = () => {
    const url = `${baseURL}?apikey=${key}` // &geoPoint=

        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setEvent(data._embedded.events)
            console.log(data)
        })
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    return(
        <div>
            <h2 className="sectionTitle">Events Near You</h2>
            <p>{event.map(item => item.name)}</p>
            <p>{event.map(item => item.dates.start.localDate)}</p>
            <p>{event.map(item => item.dates.start.localTime)}</p>
            <p>{event.map(item => item.url)}</p>
        </div>
    )
};

export default EventsApp;