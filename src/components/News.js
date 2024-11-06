import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div>
        <h1>News Home</h1>
        <NewsItem />
      </div>
    );
  }
}

export default News;
