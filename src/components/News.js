import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner"; // Import the spinner component
import { useParams } from "react-router-dom"; // Import useParams to read category from URL
import "../Style/News.css";

const News = (props) => {
  const { category } = useParams(); // Get category from the URL
  const [articles, setArticles] = useState([]); // Initialize articles as an empty array
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const categoryFromParams = category || "general"; // Default category if no category is provided

  // Fetch news function
  const fetchNews = async () => {
    const pageSize = props.pageSize || 6; // Default to 6 if no pageSize is passed
    const apiKey = process.env.REACT_APP_API_KEY; // Securely fetch API key from environment variable
    const country = props.country || "us"; // Default to 'us' if country is undefined
    const category = categoryFromParams || "general"; // Default to 'general' if categoryFromParams is undefined

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();

      if (parsedData.status === "ok") {
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
      } else {
        console.error(
          "Error fetching news:",
          parsedData.message || "Unknown error"
        );
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [categoryFromParams, page]);

  const handelPrevClick = async () => {
    if (page > 1) {
      setLoading(true);
      setPage(page - 1);
    }
  };

  const handelNextClick = async () => {
    if (page < Math.ceil(totalResults / (props.pageSize || 6))) {
      setLoading(true);
      setPage(page + 1);
    }
  };

  return (
    <div className="container my-3">
      <h1 id="heading" align="center">
        NewsUp - Top Headlines
      </h1>

      {/* Show message for home page */}
      {categoryFromParams === "general" && (
        <div className="alert alert-info">
          Welcome to <b>NewsUp</b>, your daily source of the top headlines from
          around the world.
        </div>
      )}

      {loading && <Spinner />}

      <div className="row">
        {!loading &&
          articles.length > 0 &&
          articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={
                  element.description ? element.description.slice(0, 88) : ""
                }
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}

        {!loading && articles.length === 0 && (
          <p>No news available for this category</p>
        )}
      </div>

      <div className="container d-flex justify-content-between">
        <button
          id="previous"
          type="button"
          className="btn btn-secondary mx-2"
          onClick={handelPrevClick}
          disabled={page <= 1}
        >
          ← Previous
        </button>
        <button
          id="next"
          type="button"
          className="btn btn-secondary"
          onClick={handelNextClick}
          disabled={page >= Math.ceil(totalResults / (props.pageSize || 6))}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default News;
