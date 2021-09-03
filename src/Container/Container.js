import "./Container.css"
import React from "react";
import Repo from "../Repo_Component/Repo";
import axios from "axios";

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            repos : [],
        }
    }

    componentDidMount(){
        console.log(this.getDateFormat());
    }
    getDateFormat(){
        let date = new Date();
        let fullYear = date.getFullYear();
        let month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
        let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        return `${fullYear}-${month}-${day}`;
    }
    render(){
        return(
            <div className="container">
                {this.state.repos.map(repo => (<Repo/>))}
            </div>
        )
    }
}

export default Container;