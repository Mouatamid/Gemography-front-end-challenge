import {Component} from "react";
import "./Text.css";

class Text extends Component{
    render(){
        return(
            <div className="text">
                <h2 className="repository-name">repo name</h2>
                <p className="repository-name">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                <div>
                    <p className="number-stars">Stars : 116</p>
                    <p className="number-issues">Issues : 116</p>
                    <p className="submit-info">Lorem Ipsum Lorem 30 ago by L</p>
                </div>
            </div>
        )
    }
}

export default Text;