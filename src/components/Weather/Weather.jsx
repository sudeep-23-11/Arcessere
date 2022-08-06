import React, { useState } from 'react'
import axios from 'axios';

import '../../style/weather-style.css';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

export default function Weather() {

    const APIKey = process.env.REACT_APP_WEATHER_API;
    
    const [city, setCity] = useState("");
    let changeCity = (event) => {
        setCity(event.target.value);
    }
    
    const [data, setData] = useState({
        latitute: 0, longitute: 0, description: "",
        temperature: 0, pressure: 0, humidity: 0,
        visibility: 0, windSpeed: 0, clouds: 0,
    });
    let clickButton = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
            .then((response) => {
                setData({
                    latitute: response.data.coord.lat,
                    longitute: response.data.coord.lon,
                    description: response.data.weather[0].description,
                    temperature: response.data.main.temp,
                    pressure: response.data.main.pressure,
                    humidity: response.data.main.humidity,
                    visibility: response.data.visibility,
                    windSpeed: response.data.wind.speed,
                    clouds: response.data.clouds.all,
                })
            })
    }

    return (
        <div id="weather">
            <LeftPane data={data}/>
            
            <div id='weather-center'>
                <input type="text" placeholder='Enter location' autoFocus value={city} onChange={changeCity}/>
                <button type="submit" onClick={clickButton}>Go</button>
                <h2>{data.latitute} &#176;N latitute</h2>
                <h2>{data.longitute} &#176;E longitute</h2>
                <h2>{data.description}</h2>
            </div>

            <RightPane data={data}/>
        </div>
    )
}