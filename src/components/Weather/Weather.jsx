import React, { useState } from 'react'

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
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
            .then((response) => response.json())
            .then((data) => {
                setData({
                    latitute: {key: "Latitute", value: data.coord.lat, unit: "°N latitute"},
                    longitute: {key: "Longitute", value: data.coord.lon, unit: "°E longitute"},
                    description: {key: "Description", value: data.weather[0].description, unit: ""},
                    temperature: {key: "Temperature", value: data.main.temp, unit: "K"},
                    pressure: {key: "Pressure", value: data.main.pressure, unit: "pascal"},
                    humidity: {key: "Humidity", value: data.main.humidity, unit: "g/kg"},
                    visibility: {key: "Visibility", value: data.visibility, unit: "metres"},
                    windSpeed: {key: "Wind Speed", value: data.wind.speed, unit: "km/hour"},
                    clouds: {key: "Clouds", value: data.clouds.all, unit: "oktas"}
                });
            })
            .catch((error) => {
                console.error('fetching data error:', error);
            });
        setCity('');
        };

    return (
        <div className='container-fluid d-flex flex-column justify-content-center' style={{height: "100vh", backgroundColor: "#B6FFFA", color: "#687EFF"}}>
            <div className="container d-flex flex-row mb-5">
                <TopWidget list={[data.description]}/>
                <TopWidget list={[data.latitute, data.longitute]}/>
            </div>
            <div className="container text-center mb-5">
                <input className='d-block ms-auto me-auto mb-3' type="text" placeholder='Enter city' autoFocus value={city} onChange={(e) => setCity(e.target.value)}/>
                <button className='btn text-light' type="submit" style={{backgroundColor: "#687EFF"}} onClick={submitHandler}>Go</button>
            </div>
            <div className="container d-flex flex-row">
                <BottomWidget list={[data.temperature, data.pressure, data.humidity]}/>
                <BottomWidget list={[data.visibility, data.windSpeed, data.clouds]}/>
            </div>
        </div>
    )
}