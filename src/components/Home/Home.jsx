import React from 'react'

import Widget from './Widget'

export default function Home() {

    const w = "Get weather conditions of city like Temperature, Pressure, Humdity"
    const m = "Get information of movie like Actors, Released Date, Ratings"
    const n = "Get daily update of news like Entertainment, Sports, Technology"

    return (
        <div className='container-fluid d-flex flex-column flex-lg-row align-items-lg-center' style={{minHeight: "100vh", backgroundColor: "#F1EFEF"}}>
            <Widget image="./images/weather.jpg" color="#687EFF" caption={w}/>
            <Widget image="./images/movies.jpg" color="#FE0000" caption={m}/>
            <Widget image="./images/news.jpg" color="#618264" caption={n}/>
        </div>
    )
}