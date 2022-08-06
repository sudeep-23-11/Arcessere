import React, { useState } from 'react'
import axios from 'axios';

import '../style/movies-style.css';
import DownPane from './Movies components/DownPane';
import RightPane from './Movies components/RightPane';

export default function Movies() {

    const APIKey = process.env.REACT_APP_MOVIES_API;

    const [movie, setMovie] = useState("");
    let changeMovie = (event) => {
        setMovie(event.target.value);
    }

    const [data, setData] = useState({
        genre: "", director: "", writer: "", actors: "",
        releasedDate: "", runtime: "", imdb: "", rottenTomatoes: "", boxOffice: "",
        plot: "", poster: "movies-poster.jpg",
    });
    let clickButton = () => {
        axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&t=${movie}`)
            .then((response) => {
                setData({
                    genre: response.data.Genre,
                    director: response.data.Director,
                    writer: response.data.Writer,
                    actors: response.data.Actors,
                    releasedDate: response.data.Released,
                    runtime: response.data.Runtime,
                    imdb: response.data.Ratings[0].Value,
                    rottenTomatoes: response.data.Ratings[1].Value,
                    boxOffice: response.data.BoxOffice,
                    plot: response.data.Plot,
                    poster: response.data.Poster,
                })
            })
    }

    return (
        <div id='movies'>
            <div id='movies-top'>
                <input type="text" placeholder='Enter movie' autoFocus value={movie} onChange={changeMovie}/>
                <button type="submit" onClick={clickButton}>Go</button>
            </div>
            <DownPane data={data}/>
            <RightPane data={data}/>
        </div>
    )
}