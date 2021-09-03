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
    };
  }

  componentDidMount() {
    console.log(this.getDateFormat());
    axios
      .get(
        "https://api.github.com/search/repositories?q=created:>" +
          this.getDateFormat() +
          "&sort=stars&order=desc"
      )
      .then((result) => {
        return result.data;
      })
      .then((data) => {
        this.setState({
            repos : data.items,
            loaded : true
        })
      }).catch(e => window.alert(e.message));
  }
  getDateFormat() {
    let date = new Date();
    let fullYear = date.getFullYear();
    let month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return `${fullYear}-${month}-${day}`;
  }
  render() {
    return (
      <div className="container">
        {this.state.loaded ? (
          this.state.repos.map((repo) => <Repo data={repo} />)
        ) : (
          <h3 className="loading">Loading...</h3>
        )}
      </div>
    );
  }
}

export default Container;
