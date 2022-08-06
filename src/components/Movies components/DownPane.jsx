import React from 'react'

export default function DownPane(props) {
    return (
        <div id='movies-down'>
            <h2>Genre: {props.data.genre}</h2>
            <h2>Director: {props.data.director}</h2>
            <h2>Writer: {props.data.writer}</h2>
            <h2>Actors: {props.data.actors}</h2>
        </div>
    )
}