import React, { useState, useEffect } from 'react'
import axios from 'axios';

import '../style/news-style.css';
import WidgetList from './News components/WidgetList';

export default function News() {

    const APIKey = process.env.REACT_APP_NEWS_API;
    
    const [category, setCategory] = useState("");
    let changeCategory = (event) => {
        setCategory(event.target.value);
    }
    
    const [data, setData] = useState({
        total: 0, articles: [],
    });
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?pageSize=100&country=in&category=general&apiKey=${APIKey}`)
            .then((response) => {
                setData({
                    total: response.data.totalResults,
                    articles: response.data.articles,
                })
            })
    }, [])
    let clickButton = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?pageSize=100&country=in&category=${category}&apiKey=${APIKey}`)
            .then((response) => {
                setData({
                    total: response.data.totalResults,
                    articles: response.data.articles,
                })
            })
    }

    if (!data.total) return null;

    return (
        <div id='news'>
            <div id="news-center">
                <input type="text" placeholder='Enter category' list='categories' autoFocus value={category} onChange={changeCategory}/>
                <datalist id="categories">
                    <option>Business</option>
                    <option>Entertainment</option>
                    <option>Health</option>
                    <option>Science</option>
                    <option>Sports</option>
                    <option>Technology</option>
                </datalist>
                <button type="submit" onClick={clickButton}>Go</button>
            </div>
            <WidgetList data={data}/>
        </div>
    )
}