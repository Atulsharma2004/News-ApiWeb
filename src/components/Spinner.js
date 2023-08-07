import "../App.css";
import React, { Component } from "react";
import loading from "./loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center loader-spin">
        <img src={loading} alt="loadin" />
      </div>
    );
  }
}

export default Spinner;
