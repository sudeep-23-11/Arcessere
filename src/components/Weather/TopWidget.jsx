import React from 'react'

export default function TopWidget(props) {
    return (
        <div className='container text-center mb-5'>
            {props.list.map((e) => {
                return <div key={e.key} className="container">
                    <h5 >{`${e.value} ${e.unit}`}</h5>
                </div>
            })}
        </div>
    )
}