import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "../Style/News.css";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    console.log("NewsItem key={element.url} Constructor");
    this.state = { articles: [], loading: false, page: 1 };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=0f07714411e243b3a4e523cb089eb470&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handelPrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0f07714411e243b3a4e523cb089eb470&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ page: this.state.page - 1, articles: parsedData.articles });
  };

  handelNextClick = async () => {
    console.log("Next");

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      // nothing to do
    } else {
      let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0f07714411e243b3a4e523cb089eb470&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 id="heading" align="center">
          NewsUp - Top Headlines
        </h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <>
                {/* Row 1 */}
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              </>
            );
          })}
        </div>
        <div
          id="navigate_page"
          className="container d-flex justify-content-between"
        >
          <button
            id="previous"
            type="button"
            class="btn btn-secondary mx-2"
            align="center"
            onClick={this.handelPrevClick}
            disabled={this.state.page <= 1}
          >
            <span aria-hidden="true">←</span> Previous
          </button>
          <button
            id="next"
            type="button"
            class="btn btn-secondary"
            align="center"
            onClick={this.handelNextClick}
          >
            Next <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    );
  }
}

export default News;
