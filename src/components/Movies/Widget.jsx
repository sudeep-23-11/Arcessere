import React from 'react'

export default function Widget(props) {
    return (
        <div className='container'>
            {props.list.map((e) => {
                return <div key={e.key} className="container mb-3">
                    <h5>{`${e.key} : ${e.value}`}</h5>
                </div>
            })}
        </div>
    )
}