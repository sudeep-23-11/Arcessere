import React, { useState } from 'react'
import axios from 'axios'

import '../../style/weather.css'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

export default function Weather() {

    const key = process.env.REACT_APP_WEATHER_API_KEY
    
    const [city, setCity] = useState("")
    const [data, setData] = useState({
        latitute: "", longitute: "", description: "",
        temperature: "", pressure: "", humidity: "",
        visibility: "", windSpeed: "", clouds: ""
    })
    let submitHandler = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
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
        setCity("")
    }

    return (
        <div id="weather">
            <LeftPane data={data}/>
            <div id='weather-center'>
                <input type="text" placeholder='Enter city' autoFocus value={city} onChange={(e) => setCity(e.target.value)}/>
                <button type="submit" onClick={submitHandler}>Go</button>
                <h2 id='latitute'>{data.latitute} °N latitute</h2>
                <h2 id='longitute'>{data.longitute} °E longitute</h2>
                <h2>{data.description}</h2>
            </div>
            <RightPane data={data}/>
        </div>
    )
}