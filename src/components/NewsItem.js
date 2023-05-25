import React from 'react'

const NewsItem=(props)=>{
    let {title,description,imgUrl,newsUrl,author,date,source}=props;
    return (
      <div className="container my-3">
        <div className="card">

            <div style={{
              display:"flex",
              justifyContent:"flex-end",
              position:"absolute",
              right:"0"
            }}>
                <span className={"badge rounded-pill bg-danger"}>
                {source}
                </span>
            </div>

            <img src={!imgUrl?"https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=1024x1024&w=is&k=20&c=S9FBe3KUvooZHZktJzr8Nt94wtg56BQTQiqAz8zUK8M=":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">by {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read more..</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem
