import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize=16
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="geneal"
                  pageSize={this.pageSize}
                  counry="in"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={this.pageSize}
                  counry="in"
                  category="business"
                />
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={this.pageSize}
                  counry="in"
                  category="entertainment"
                />
              }
            />

            <Route
              exact
              path="/general"
              element={
                <News
                  key="geneal"
                  pageSize={this.pageSize}
                  counry="in"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <News key="health" pageSize={this.pageSize} counry="in" category="health" />
              }
            />

            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={this.pageSize}
                  counry="in"
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News key="sports" pageSize={this.pageSize} counry="in" category="sports" />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technlogy"
                  pageSize={this.pageSize}
                  counry="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
