import React from 'react'

import '../../style/home.css'
import Widget from './Widget'

export default function Home() {

    const w = "Get weather conditions of city like Temperature, Pressure, Humdity"
    const m = "Get information of movie like Actors, Released Date, Ratings"
    const n = "Get daily update of news like Entertainment, Sports, Technology"

    return (
        <div id='home'>
            <Widget image="./images/weather.jpg" color="#0D6EFD" caption={w}/>
            <Widget image="./images/movies.jpg" color="#DC3545" caption={m}/>
            <Widget image="./images/news.jpg" color="#198754" caption={n}/>
        </div>
    )
}