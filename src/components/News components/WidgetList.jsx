import React from 'react'

import Widget from './Widget';

export default function WidgetList(props) {
    return (
        <>
            {props.data.map((data, idx)=>{
                return <Widget key={idx} article={data} />
            })}
        </>
    )
}