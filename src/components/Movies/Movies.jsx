import React, { useState } from 'react'
import axios from 'axios'

import Widget from './Widget'

export default function Movies() {

    const key = process.env.REACT_APP_MOVIES_API_KEY

    const [movie, setMovie] = useState("")
    const [data, setData] = useState({
        poster: {key: "Poster", value: "./images/movie.jpg"},
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
        axios.get(`https://www.omdbapi.com/?t=${movie}&apikey=${key}`)
        .then((response) => {
            setData({
                poster: {key: "Poster", value: response.data.Poster},
                plot: {key: "Plot", value: response.data.Plot},
                genre: {key: "Genre", value: response.data.Genre},
                actors: {key: "Actors", value: response.data.Actors},
                director: {key: "Director", value: response.data.Director},
                writer: {key: "Writer", value: response.data.Writer},
                releasedDate: {key: "Released Date", value: response.data.Released},
                runtime: {key: "Runtime", value: response.data.Runtime},
                boxOffice: {key: "Box Office Collection", value: response.data.BoxOffice},
                imdb: {key: "Imdb Rating", value: response.data.Ratings[0].Value},
                rottenTomatoes: {key: "Rotten Tomatoes Rating", value: response.data.Ratings[1].Value}
            });
        })
        .catch((error) => {
            console.log("Error in getting data\n", error)
        })
        setMovie("")
    }

    const mq = window.matchMedia('(min-width: 992px)').matches;

    return (
        <div className="container-fluid d-flex flex-column flex-lg-row align-items-lg-center" style={{minHeight: "100vh", backgroundColor: "#FCAEAE", color: "#FE0000"}}>
            <div className="container text-center" style={{marginTop: mq?"2.5%":"15%", marginBottom: mq?"0%":"5%"}}>
                <img className='h-50 w-50 mb-5' src={`${data.poster.value}`} alt="loading" />
                <h5>{`${data.plot.value}`}</h5>
            </div>
            <div className="container d-flex flex-column">
                <div className="container text-center mb-5">
                    <input className='d-block rounded ms-auto me-auto mb-3' type="text" placeholder='Enter movie' autoFocus value={movie} onChange={(e) => setMovie(e.target.value)}/>
                    <button className='btn text-light' type="submit" style={{background: "#FE0000"}} onClick={submitHandler}>Go</button>
                </div>
                <Widget list={[data.genre, data.actors, data.director, data.writer, data.releasedDate, data.runtime, data.boxOffice, data.imdb, data.rottenTomatoes]}/>
            </div>
        </div>
    )
}