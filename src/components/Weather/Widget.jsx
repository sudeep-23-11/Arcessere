import React from 'react'

export default function Widget(props) {
    return (
        <div id='weather-widget'>
            <img src={`icons/${props.icon}.svg`} alt="loading" />
            <h2>{props.name}</h2>
            <h1>{props.value}</h1>
        </div>
    )
}