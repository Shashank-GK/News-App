import React, { Component } from "react";
import "../Style/NewsItem.css";

export class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl } = this.props;

    return (
      <div className="my-3">
        <div className="card">
          <img
            src={imageUrl || "../Assets/news_img.png"}
            className="card-img-top"
            alt="News"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
