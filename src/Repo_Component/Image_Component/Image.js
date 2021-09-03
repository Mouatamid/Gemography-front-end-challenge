import {Component} from "react";
import "./Image.css";

class Image extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <img src={this.props.source}/>
        )
    }
}

export default Image;