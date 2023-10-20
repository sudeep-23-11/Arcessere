import React from 'react'

export default function Widget(props) {
    return (
        <div className='container text-center'>
            <img className='h-75 w-75 mb-3' src={props.image} alt="loading" />
            <h4 className={`text-${props.color}`}>{props.caption}</h4>
        </div>
    )
}