import React, { useState } from 'react'
import axios from 'axios';

import '../style/movies-style.css';

export default function Movies() {

    const APIKey = process.env.REACT_APP_MOVIES_API;

    const [movie, setMovie] = useState("");
    let changeMovie = (event) => {
        setMovie(event.target.value);
    }

    const [data, setData] = useState({
        releasedDate: "", runtime: "", genre: "",
        director: "", writer: "", actors: "",
        plot: "", imdbRating: "", boxOffice: "",
        poster: "movies-poster.jpg",
    });
    let clickButton = () => {
        axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&t=${movie}`)
            .then((response) => {
                setData({
                    releasedDate: response.data.Released,
                    runtime: response.data.Runtime,
                    genre: response.data.Genre,
                    director: response.data.Director,
                    writer: response.data.Writer,
                    actors: response.data.Actors,
                    plot: response.data.Plot,
                    imdbRating: response.data.imdbRating,
                    boxOffice: response.data.BoxOffice,
                    poster: response.data.Poster,
                })
            })
    }

    return (
        <div id='movies'>
            
        </div>
    )
}