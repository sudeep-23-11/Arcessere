import React from 'react'

import '../style/home-style.css';
import Widget from './Home components/Widget'

export default function Home() {

    const w = "Get to know the weather conditons of any place in the world";
    const m = "Want to know anything about a movie, try out this";
    const n = "Update yourself daily with all kinds of news happening around the world";

    return (
        <div id='home'>
            <Widget image="images/weather.jpg" color="#0D6EFD" caption={w}/>
            <Widget image="images/movies.jpg" color="#DC3545" caption={m}/>
            <Widget image="images/news.jpg" color="#198754" caption={n}/>
        </div>
    )
}