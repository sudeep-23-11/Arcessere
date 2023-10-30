import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Widget from './Widget'

export default function News() {

    const key = process.env.REACT_APP_NEWS_API_KEY
    
    const [category, setCategory] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=general&pageSize=100&apiKey=${key}`)
        .then((response) => {
            setData(response.data.articles);
        })
        .catch((error) => {
            console.log("Error in getting data\n", error)
        })
    }, [key])
    let submitHandler = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=100&apiKey=${key}`)
        .then((response) => {
            setData(response.data.articles);
        })
        .catch((error) => {
            console.log("Error in getting data\n", error)
        })
        setCategory("")
    }

    const mq = window.matchMedia('(min-width: 768px)').matches;

    return (
        <div className='container-fluid d-flex flex-column' style={{backgroundColor: "#D0E7D2"}}>
            <div className='container text-center mb-5' style={{marginTop: mq?"10%":"20%"}}>
                <input className='d-block rounded ms-auto me-auto mb-3' type="text" placeholder='Enter category' list='categories' autoFocus value={category} onChange={(e) => setCategory(e.target.value)}/>
                <datalist id="categories">
                    <option>Business</option>
                    <option>Entertainment</option>
                    <option>Health</option>
                    <option>Science</option>
                    <option>Sports</option>
                    <option>Technology</option>
                </datalist>
                <button className='btn text-light' type="submit" style={{backgroundColor: "#618264"}} onClick={submitHandler}>Go</button>
            </div>
            <div className="container d-flex flex-row flex-wrap justify-content-around">
                {data.map((e, id) => {
                    return <Widget key={id} article={e} />
                })}
            </div>
        </div>
    )
}