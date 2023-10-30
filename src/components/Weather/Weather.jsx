import React, { useState } from 'react'
import axios from 'axios'

import TopWidget from './TopWidget'
import BottomWidget from './BottomWidget'

export default function Weather() {

    const key = process.env.REACT_APP_WEATHER_API_KEY
    
    const [city, setCity] = useState("")
    const [data, setData] = useState({
        latitute: {key: "Latitute", value: "", unit: "°N latitute"},
        longitute: {key: "Longitute", value: "", unit: "°E longitute"},
        description: {key: "Description", value: "climate", unit: ""},
        temperature: {key: "Temperature", value: "", unit: "K"},
        pressure: {key: "Pressure", value: "", unit: "pascal"},
        humidity: {key: "Humidity", value: "", unit: "g/kg"},
        visibility: {key: "Visibility", value: "", unit: "metres"},
        windSpeed: {key: "Wind Speed", value: "", unit: "km/hour"},
        clouds: {key: "Clouds", value: "", unit: "oktas"}
    })

    let submitHandler = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then((response) => {
            setData({
                latitute: {key: "Latitute", value: response.data.coord.lat, unit: "°N latitute"},
                longitute: {key: "Longitute", value: response.data.coord.lon, unit: "°E longitute"},
                description: {key: "Description", value: response.data.weather[0].description, unit: ""},
                temperature: {key: "Temperature", value: response.data.main.temp, unit: "K"},
                pressure: {key: "Pressure", value: response.data.main.pressure, unit: "pascal"},
                humidity: {key: "Humidity", value: response.data.main.humidity, unit: "g/kg"},
                visibility: {key: "Visibility", value: response.data.visibility, unit: "metres"},
                windSpeed: {key: "Wind Speed", value: response.data.wind.speed, unit: "km/hour"},
                clouds: {key: "Clouds", value: response.data.clouds.all, unit: "oktas"}
            });
        })
        .catch((error) => {
            console.log("Error in getting data\n", error)
        })
        setCity("");
    }

    const mq = window.matchMedia('(min-width: 768px)').matches;

    return (
        <div className='container-fluid d-flex flex-column' style={{minHeight: "100vh", backgroundColor: "#B6FFFA", color: "#687EFF"}}>
            <div className="container d-flex flex-column flex-md-row" style={{marginTop: mq?"10%":"20%"}}>
                <TopWidget list={[data.description]}/>
                <TopWidget list={[data.latitute, data.longitute]}/>
            </div>
            <div className="container text-center mb-5">
                <input className='d-block rounded ms-auto me-auto mb-3' type="text" placeholder='Enter city' autoFocus value={city} onChange={(e) => setCity(e.target.value)}/>
                <button className='btn text-light' type="submit" style={{backgroundColor: "#687EFF"}} onClick={submitHandler}>Go</button>
            </div>
            <div className="container d-flex flex-column flex-md-row">
                <BottomWidget list={[data.temperature, data.pressure, data.humidity]}/>
                <BottomWidget list={[data.visibility, data.windSpeed, data.clouds]}/>
            </div>
        </div>
    )
}