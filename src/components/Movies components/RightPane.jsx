import React from 'react'

export default function RightPane(props) {
    return (
        <div id='movies-right'>
            <img src={props.data.poster} alt="loading" />
            <h2>Released Date: {props.data.releasedDate}</h2>
            <h2>Runtime: {props.data.runtime}</h2>
            <h2>Imdb: {props.data.imdb}</h2>
            <h2>Rotten Tomatoes: {props.data.rottenTomatoes}</h2>
            <h2>Box Office: {props.data.boxOffice}</h2>
            <h4>{props.data.plot}</h4>
        </div>
    )
}
