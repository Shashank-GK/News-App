import React, { Component } from "react";
import loader from "../Assets/spinner.gif";

export default class spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={loader}
          alt="Loading"
          style={{ width: "100px", height: "100px" }}
        />
        <h1>Loading ...
          
        </h1>
      </div>
    );
  }
}
