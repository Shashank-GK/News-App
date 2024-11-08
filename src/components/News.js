import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner"; // Import the spinner component
import "../Style/News.css";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "health",
  };
  static propTypes = {
    country: "string",
    pageSize: "number",
    category: "string",
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async fetchNews(page) {
    const pageSize = this.props.pageSize || 20; // Default to 20 if no pageSize is passed
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0f07714411e243b3a4e523cb089eb470
    &page=${page}&pageSize=${pageSize}`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        page: page,
        loading: false, // Set loading to false after data is fetched
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }

  async componentDidMount() {
    this.fetchNews(1);
  }

  handelPrevClick = async () => {
    if (this.state.page > 1) {
      this.setState({ loading: true }); // Show spinner when changing page
      this.fetchNews(this.state.page - 1);
    }
  };

  handelNextClick = async () => {
    if (
      this.state.page <
      Math.ceil(this.state.totalResults / (this.props.pageSize || 20))
    ) {
      this.setState({ loading: true }); // Show spinner when changing page
      this.fetchNews(this.state.page + 1);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 id="heading" align="center">
          NewsUp - Top Headlines
        </h1>

        {/* Conditionally render the spinner component */}
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
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
            className="btn btn-secondary mx-2"
            onClick={this.handelPrevClick}
            disabled={this.state.page <= 1}
          >
            ← Previous
          </button>
          <button
            id="next"
            type="button"
            className="btn btn-secondary"
            onClick={this.handelNextClick}
            disabled={
              this.state.page >=
              Math.ceil(this.state.totalResults / (this.props.pageSize || 20))
            }
          >
            Next →
          </button>
        </div>
      </div>
    );
  }
}

export default News;
