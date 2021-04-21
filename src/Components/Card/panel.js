import React, { Component } from "react";
import "./panel.css";

export default class CPanel extends Component{
    render(){
        return(
            <div className="CPanel">
                <div className="CPanel-panel">
                    
                    <div>
                        <h2 className="CPanel-title">{this.props.title}</h2>
                    </div>
                    <div>
                        <p className="CPanel-body">{this.props.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}