import React, { useState, useEffect } from 'react'

import Widget from './Widget';

export default function WidgetList(props) {

    const [index, setIndex] = useState([]);
    useEffect(() => {
        let temp = [];
        for (let i = 0; i < props.data.total; i++)
        temp.push(i);
        setIndex(temp);
    }, [])
    
    if (!index.length) return null;

    return (
        <>
            {index.map((i)=>{
                return <Widget key={i} article={props.data.articles[i]} />
            })}
        </>
    )
}