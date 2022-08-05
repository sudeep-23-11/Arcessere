import React, { useState, useEffect } from 'react'

import '../style/weather-style.css';

export default function Weather() {

    const APIKey = "ee88d0026ef28047cf9812b268ae9ddf";
    const [city, setCity] = useState("Lucknow");
    
    const fetchAPI = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
        const response = await fetch(url);
        const data = await response.json();
    }
    useEffect(() => {
        fetchAPI();
    }, [])

    return (
        <div id="weather">
            <div id='weather-form'>
                <form action="/" target='_self' method="post" autoComplete='on'>
                    <input id='weather-form-input' type="search" placeholder='Enter location' autoFocus required/><br />
                    <button id='weather-form-button' type="submit">Go</button>
                </form>
            </div>
        </div>
    )
}