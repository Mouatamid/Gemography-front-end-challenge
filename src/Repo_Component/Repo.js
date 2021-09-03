import { Component } from "react";
import "./Repo.css";
import Image from "./Image_Component/Image";
import Text from "./Text/Text";

class Repo extends Component {
  render() {
    return (
      <div className="repo">
        <Image />
        <Text />
      </div>
    );
  }
}

export default Repo;
