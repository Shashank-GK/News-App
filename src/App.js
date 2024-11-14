import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            {/* Home Route (default category is "general") */}
            <Route
              path="/"
              element={<News pageSize={6} country="us" category="general" />}
            />
            <Route
              path="/business"
              element={<News pageSize={6} country="us" category="business" />}
            />
            <Route
              path="/entertainment"
              element={
                <News pageSize={6} country="us" category="entertainment" />
              }
            />
            <Route
              path="/health"
              element={<News pageSize={6} country="us" category="health" />}
            />
            <Route
              path="/science"
              element={<News pageSize={6} country="us" category="science" />}
            />
            <Route
              path="/sports"
              element={<News pageSize={6} country="us" category="sports" />}
            />
            <Route
              path="/technology"
              element={<News pageSize={6} country="us" category="technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
