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

  // Default category if no category is provided in the URL
  const categoryFromParams = category || "general";

  // Fetch news function
  const fetchNews = async (page) => {
    const pageSize = props.pageSize || 20; // Default to 20 if no pageSize is passed
    const apiKey = "YOUR_API_KEY"; // Replace this with your actual API key
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${categoryFromParams}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      if (parsedData.articles) {
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setPage(page);
      } else {
        console.error("Error: Articles not found in response", parsedData);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(page); // Fetch news when category or page changes
  }, [categoryFromParams, page]); // Depend on category and page

  const handelPrevClick = async () => {
    if (page > 1) {
      setLoading(true);
      fetchNews(page - 1);
    }
  };

  const handelNextClick = async () => {
    if (page < Math.ceil(totalResults / (props.pageSize || 20))) {
      setLoading(true);
      fetchNews(page + 1);
    }
  };

  return (
    <div className="container my-3">
      <h1 id="heading" align="center">
        NewsUp - Top Headlines
      </h1>

      {/* Conditionally render the spinner component */}
      {loading && <Spinner />}

      <div className="row">
        {!loading &&
          Array.isArray(articles) && // Only map if articles is an array
          articles.map((element) => {
            return (
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
          disabled={page >= Math.ceil(totalResults / (props.pageSize || 20))}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default News;
