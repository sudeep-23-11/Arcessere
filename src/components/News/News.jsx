import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../../style/news.css'
import Widget from './Widget'

export default function News() {

    const key = process.env.REACT_APP_NEWS_API_KEY
    
    const [category, setCategory] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=general&pageSize=100&apiKey=${key}`)
            .then((response) => {
                setData(response.data.articles)
            })
    }, [])
    let submitHandler = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=100&apiKey=${key}`)
            .then((response) => {
                setData(response.data.articles)
            })
        setCategory("")
    }

    return (
        <div id='news'>
            <div id="news-top">
                <input type="text" placeholder='Enter category' list='categories' autoFocus value={category} onChange={(e) => setCategory(e.target.value)}/>
                <datalist id="categories">
                    <option>Business</option>
                    <option>Entertainment</option>
                    <option>Health</option>
                    <option>Science</option>
                    <option>Sports</option>
                    <option>Technology</option>
                </datalist>
                <button type="submit" onClick={submitHandler}>Go</button>
            </div>
            {data.map((article, id) => {
                return <Widget key={id} article={article} />
            })}
        </div>
    )
}