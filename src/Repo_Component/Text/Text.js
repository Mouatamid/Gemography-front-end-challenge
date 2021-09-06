import { Component } from "react";
import "./Text.css";

class Text extends Component {
  constructor(props) {
    super(props);
  }
  getDaysDifference(date) {
    let date1 = new Date();
    const diffTime = Math.abs(date1 - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  render() {
    return (
      <div className="text">
        <h2 className="repository-name">{this.props.repoName}</h2>
        <p className="repository-name">{this.props.repoDesc}</p>
        <div>
          <p className="number-stars">Stars : {this.props.nbStars}</p>
          <p className="number-issues">Issues : {this.props.nbIssues}</p>
          <p className="submit-info">
            Submitted {this.getDaysDifference(new Date(this.props.creationDate))} days ago by {this.props.authorName}
          </p>
        </div>
      </div>
    );
  }
}

export default Text;
