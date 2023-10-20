import React from 'react'

import Widget from './Widget'

export default function Home() {

    const w = "Get weather conditions of city like Temperature, Pressure, Humdity"
    const m = "Get information of movie like Actors, Released Date, Ratings"
    const n = "Get daily update of news like Entertainment, Sports, Technology"

    return (
        <div className='container-fluid d-flex flex-row align-items-center' style={{height: "100vh", backgroundColor: ""}}>
            <Widget image="./images/weather.jpg" color="primary" caption={w}/>
            <Widget image="./images/movies.jpg" color="danger" caption={m}/>
            <Widget image="./images/news.jpg" color="success" caption={n}/>
        </div>
    )
}