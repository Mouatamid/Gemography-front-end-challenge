import {Component} from "react";
import "./Text.css";

class Text extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="text">
                <h2 className="repository-name">{this.props.repoName}</h2>
                <p className="repository-name">{this.props.repoDesc}</p>
                <div>
                    <p className="number-stars">Stars : {this.props.nbStars}</p>
                    <p className="number-issues">Issues : {this.props.nbIssues}</p>
                    <p className="submit-info">Submitted 30 ago by L</p>
                </div>
            </div>
        )
    }
}

export default Text;