import React from 'react'

import '../style/home-style.css';
import Widget from './Home components/Widget'

export default function Home() {

    const w = "Get weather conditions of any city like Temperature, Pressure, Humdity";
    const m = "Get information about any movie like Actors, Ratings, Plot";
    const n = "Daily update yourself with all kinds of news like Entertainment, Sports, Technology";

    return (
        <div id='home'>
            <Widget image="images/weather.jpg" color="#0D6EFD" caption={w}/>
            <Widget image="images/movies.jpg" color="#DC3545" caption={m}/>
            <Widget image="images/news.jpg" color="#198754" caption={n}/>
        </div>
    )
}