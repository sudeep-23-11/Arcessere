import React from 'react'

import Widget from './Widget'

export default function LeftPane(props) {

    let t = props.data.temperature;
    let p = props.data.pressure;
    let h = props.data.humidity;

    return (
        <div className='weather-side'>
            <Widget icon="temperature" name="Temperature" value={`${t} K`}/>
            <Widget icon="pressure" name="Pressure" value={`${p} pascal`}/>
            <Widget icon="humidity" name="Humidity" value={`${h} g/kg`}/>
        </div>
    )
}