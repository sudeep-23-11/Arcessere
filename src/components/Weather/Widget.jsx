import React from 'react'

export default function Widget(props) {
    return (
        <div id='weather-widget'>
            <img src={`./icons/${props.icon}.svg`} alt="loading" />
            <h1>{props.name}</h1>
            <h2>{props.value}</h2>
        </div>
    )
}