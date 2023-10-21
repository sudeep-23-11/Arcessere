import React, { useState, useEffect } from 'react'

import Widget from './Widget'

export default function News() {

    const key = process.env.REACT_APP_NEWS_API_KEY
    
    const [category, setCategory] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=in&category=general&pageSize=100&apiKey=${key}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data.articles);
            })
            .catch((error) => {
                console.error('fetching data error:', error);
            });
    }, [key])
    let submitHandler = () => {
        fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=100&apiKey=${key}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data.articles);
            })
            .catch((error) => {
                console.error('fetching data error:', error);
            });
        setCategory("")
    }

    return (
        <div className='container-fluid d-flex flex-column' style={{backgroundColor: "#D0E7D2"}}>
            <div className='container text-center mb-5' style={{marginTop: "7.5%"}}>
                <input className='d-block ms-auto me-auto mb-3' type="text" placeholder='Enter category' list='categories' autoFocus value={category} onChange={(e) => setCategory(e.target.value)}/>
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
            <div className="container d-flex flex-row flex-wrap justify-content-between">
                {data.map((e, id) => {
                    return <Widget key={id} article={e} />
                })}
            </div>
        </div>
    )
}