import React from 'react'

export default function BottomWidget(props) {
    return (
        <div className='container text-center'>
            {props.list.map((e) => {
                return <div key={e.key} className="container mb-5">
                    <img src={`./icons/${e.key}.png`} alt="loading" />
                    <h5>{`${e.key} : ${e.value} ${e.unit}`}</h5>
                </div>
            })}
        </div>
    )
}