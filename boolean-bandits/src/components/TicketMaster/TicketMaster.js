import React, {useState, useEffect} from 'react';

const baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json'
const key = 'igxFeYezyGILxtZyI58GSfns60B5h85m'


const EventsApp = () => {

    const [events, setEvents] = useState([])

    const fetchEvents = () => {
        let url = `${baseURL}?api-key=${key}`

        fetch(url, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }) .then((res) => res.json())
        .then((logEvents) => {
            setEvents(logEvents)
            console.log(logEvents)
        })
    }

    useEffect(() => {
        fetchEvents()
    }, [])

};

export default EventsApp;