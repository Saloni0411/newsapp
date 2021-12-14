import React from "react";

const NewsItem= (props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0"
          }}
            >
          <span class="badge rounded-pill bg-danger"> {source}
            </span>
          </div>
          <img src={!imageUrl?"https://images.livemint.com/img/2021/12/08/600x338/UPI_for_feature_phones_1638941411909_1638941412107.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}
           </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author? "Unknown": author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
