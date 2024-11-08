import React, { Component } from "react";
import NewsLogo from "../Assets/news-logo.png";
import "../Style/NavBar.css";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                className="mx-2"
                src={NewsLogo}
                height="35"
                width="35"
                alt="News App Logo"
                loading="lazy"
              />
              <b>NewsUp</b>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/catagories">
                    Catagories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/catagories">
                    <b>business</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/catagories">
                    <b>entertainment</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/catagories">
                    <b>general</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/catagories">
                    <b>health</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/catagories">
                    <b>science</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/catagories">
                    <b>sports</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/catagories">
                    <b>technology</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

{
  /* <div className="d-flex">
                  <li className="nav-item me-2">
                    <a className="nav-link" href="/about">
                      About
                    </a>
                  </li>
                  <li className="nav-item dropdown me-2">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      More
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/contact">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/sponsor">
                          Sponsor Us
                        </a>
                      </li>
                    </ul>
                  </li></div> */
}
