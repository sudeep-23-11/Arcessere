import React from 'react'

export default function Widget(props) {

    if (!props.article.urlToImage)
    props.article.urlToImage = "./images/news.jpg"
    if (!props.article.description)
    props.article.description = "Oops! Description is not avaliable. For detailed news, click on the button below."

    return (
        <div className="card" id='news-widget'>
            <img src={props.article.urlToImage} className="card-img-top" alt="loading" />
            <div className="card-body">
                <h5 className="card-title">{props.article.title}</h5>
                <p className="card-text">{props.article.description}</p>
                <a href={props.article.url} className="btn btn-success">Read More</a>
            </div>
        </div>
    )
}