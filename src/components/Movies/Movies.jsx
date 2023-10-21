import React, { useState } from 'react'

import Widget from './Widget'

export default function Movies() {

    const key = process.env.REACT_APP_MOVIES_API_KEY

    const [movie, setMovie] = useState("")
    const [data, setData] = useState({
        poster: {key: "Poster", value: "./images/movies.jpg"},
        plot: {key: "Plot", value: "plot"},
        genre: {key: "Genre", value: ""},
        actors: {key: "Actors", value: ""},
        director: {key: "Director", value: ""},
        writer: {key: "Writer", value: ""},
        releasedDate: {key: "Released Date", value: ""},
        runtime: {key: "Runtime", value: ""},
        boxOffice: {key: "Box Office", value: ""},
        imdb: {key: "Imdb Rating", value: ""},
        rottenTomatoes: {key: "Rotten Tomatoes Rating", value: ""}
    })

    let submitHandler = () => {
        fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${key}`)
            .then((response) => response.json())
            .then((data) => {
                setData({
                    poster: {key: "Poster", value: data.Poster},
                    plot: {key: "Plot", value: data.Plot},
                    genre: {key: "Genre", value: data.Genre},
                    actors: {key: "Actors", value: data.Actors},
                    director: {key: "Director", value: data.Director},
                    writer: {key: "Writer", value: data.Writer},
                    releasedDate: {key: "Released Date", value: data.Released},
                    runtime: {key: "Runtime", value: data.Runtime},
                    boxOffice: {key: "Box Office Collection", value: data.BoxOffice},
                    imdb: {key: "Imdb Rating", value: data.Ratings[0].Value},
                    rottenTomatoes: {key: "Rotten Tomatoes Rating", value: data.Ratings[1].Value}
                });
            })
            .catch((error) => {
                console.error('fetching data error:', error);
            });
        setMovie("")
    }

    return (
        <div className="container-fluid d-flex flex-row" style={{height: "100vh", backgroundColor: "#E95793", color: "#610C9F"}}>
            <div className="container d-flex flex-column justify-content-center align-items-center text-center">
                <img className='h-50 w-50 mb-5' src={`${data.poster.value}`} alt="loading" />
                <h5>{`${data.plot.value}`}</h5>
            </div>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <input className='mb-3' type="text" placeholder='Enter movie' autoFocus value={movie} onChange={(e) => setMovie(e.target.value)}/>
                <button className='btn text-light mb-5' type="submit" style={{background: "#610C9F"}} onClick={submitHandler}>Go</button>
                <Widget list={[data.genre, data.actors, data.director, data.writer, data.releasedDate, data.runtime, data.boxOffice, data.imdb, data.rottenTomatoes]}/>
            </div>
        </div>
    )
}