import React from 'react'

export default function Widget(props) {

    const mq=window.matchMedia('(min-width: 992px)').matches;

    return (
        <div className='container text-center' style={{marginTop: mq?"0%":"15%"}}>
            <img className='mb-3' src={props.image} alt="loading" style={{height: mq?"75%":"50%", width: mq?"75%":"50%"}}/>
            <h5 style={{color: `${props.color}`}}>{props.caption}</h5>
        </div>
    )
}