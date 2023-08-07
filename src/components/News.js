import React, { PureComponent } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const API_KEY = process.env.REACT_APP_API_KEY;



export default class News extends PureComponent {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capatalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0,
    };
    document.title=`${this.capatalizeFirstLetter(this.props.category)} - newsFunk`;
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews()
  }

  handlePreviousClick = async () => {
    this.setState({page:this.state.page-1})
    this.updateNews()
  };
  handleNextClick = async () => {
    this.setState({page:this.state.page+1})
    this.updateNews()
  };

  fetchMoreData = async () => {
    this.setState({page:this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
    });
  };
  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "40px" }}>
          NewsFunk : Top Headlines from {this.capatalizeFirstLetter(this.props.category)}
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.dataLength!==this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container my-3">
        <div className="row">
          {
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                    auther={element.auther}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    );
  }
}
