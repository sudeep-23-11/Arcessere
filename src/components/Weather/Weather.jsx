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
        latitute: 0,
        longitute: 0,
    });
    let clickButton = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
            .then((response) => {
                setData({
                    latitute: response.data.coord.lat,
                    longitute: response.data.coord.lon,
                })
            })
    }

    return (
        <div id="weather">
            <LeftPane data={data}/>
            
            <div id='weather-middle'>
                <input id='weather-input' type="text" value={city} onChange={changeCity}/>
                <button id='weather-button' type="submit" onClick={clickButton}>Go</button>

                <h3 className='weather-heading'>{data.latitute} &#176;N</h3>
                <h3 className='weather-heading'>{data.longitute} &#176;E</h3>
            </div>

            <RightPane data={data}/>
        </div>
    )
}