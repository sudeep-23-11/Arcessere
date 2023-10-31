import React from 'react'

export default function Widget(props) {
    return (
        <div className="card mb-5" style={{width: "18rem", color: "#618264"}}>
            <img src={props.article.urlToImage ? props.article.urlToImage : `./images/default.jpg`} className="card-img-top" alt="loading" />
            <div className="card-body">
                <h5 className="card-title">{props.article.title}</h5>
                <a href={props.article.url} target="_blank" className="btn text-light" style={{backgroundColor: "#618264"}}>Read More</a>
            </div>
        </div>
    )
}