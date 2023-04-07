import React from 'react'

import Widget from './Widget'

export default function RightPane(props) {

    let v = props.data.visibility
    let ws = props.data.windSpeed
    let c = props.data.clouds

    return (
        <div className='weather-side'>
            <Widget icon="visibility" name="Visibilty" value={`${v} metres`}/>
            <Widget icon="windSpeed" name="Wind Speed" value={`${ws} km/h`}/>
            <Widget icon="clouds" name="Clouds" value={`${c} oktas`}/>
        </div>
    )
}