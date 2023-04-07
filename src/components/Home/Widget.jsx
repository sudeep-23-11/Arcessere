import React from 'react'

export default function Widget(props) {
    return (
        <div id='home-widget'>
            <img src={props.image} alt="loading" />
            <h4 style={{color: props.color}}>{props.caption}</h4>
        </div>
    )
}