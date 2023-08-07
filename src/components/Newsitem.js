import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgurl, newsurl, auther, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
          <img
            src={
              !imgurl
                ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"
                : imgurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!auther ? "Unknown" : auther} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
