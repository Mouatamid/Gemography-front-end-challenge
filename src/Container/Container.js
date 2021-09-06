import "./Container.css";
import React from "react";
import Repo from "../Repo_Component/Repo";
import axios from "axios";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      loaded: false,
      pageNumber: 1,
    };
    this.nextButtonClicked = this.nextButtonClicked.bind(this);
    this.backButtonClicked = this.backButtonClicked.bind(this);
  }

  componentDidMount() {
    let link =
      this.state.pageNumber == 1
        ? "https://api.github.com/search/repositories?q=created:>" +
          this.getDateFormat() +
          "&sort=stars&order=desc"
        : "https://api.github.com/search/repositories?q=created:>" +
          this.getDateFormat() +
          "&sort=stars&order=desc&page=" + this.state.pageNumber;
    axios
      .get(link)
      .then((result) => {
        return result.data;
      })
      .then((data) => {
        this.setState({
          repos: data.items,
          loaded: true,
        });
      })
      .catch((e) => window.alert(e.response.data.message));
  }
  componentDidUpdate() {
    let link =
      this.state.pageNumber == 1
        ? "https://api.github.com/search/repositories?q=created:>" +
          this.getDateFormat() +
          "&sort=stars&order=desc"
        : "https://api.github.com/search/repositories?q=created:>" +
          this.getDateFormat() +
          "&sort=stars&order=desc&page=" + this.state.pageNumber;
    axios
      .get(link)
      .then((result) => {
        return result.data;
      })
      .then((data) => {
        this.setState({
          repos: data.items,
          loaded: true,
        });
      })
      .catch((e) => window.alert(e.response.data.message));
  }
  getDateFormat() {
    let date = new Date();
    let fullYear = date.getFullYear();
    let month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return `${fullYear}-${month}-${day}`;
  }
  nextButtonClicked() {
    this.setState({
      loaded: false,
      pageNumber: this.state.pageNumber + 1,
    });
  }
  backButtonClicked(){
    this.setState({
      loaded: false,
      pageNumber: this.state.pageNumber - 1,
    });
  }
  render() {
    return (
      <div className="container">
        {this.state.loaded ? (
          this.state.repos.map((repo) => <Repo data={repo} />)
        ) : (
          <h3 className="loading">Loading...</h3>
        )}
        <div className="buttons">
          {this.state.pageNumber == 1 ? (
            <button className="backButton"  disabled>
              Back
            </button>
          ) : (
            <button className="backButton" onClick={this.backButtonClicked}>Back</button>
          )}
          <button className="nextButton" onClick={this.nextButtonClicked}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Container;
