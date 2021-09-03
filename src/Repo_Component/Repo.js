import { Component } from "react";
import "./Repo.css";
import Image from "./Image_Component/Image";
import Text from "./Text/Text";

class Repo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="repo">
        <Image source={this.props.data.owner.avatar_url} />
        <Text
          repoName={this.props.data.name}
          repoDesc={this.props.data.description}
          nbStars={this.props.data.stargazers_count}
          nbIssues={this.props.data.open_issues_count}
        />
      </div>
    );
  }
}

export default Repo;
