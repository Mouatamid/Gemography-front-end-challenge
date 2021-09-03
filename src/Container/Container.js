import "./Container.css"
import React from "react";
import Repo from "../Repo_Component/Repo";

class Container extends React.Component{
    render(){
        return(
            <div className="container">
                <h2>Container</h2>
                <Repo/>
            </div>
        )
    }
}

export default Container;