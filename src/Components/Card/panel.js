import React, { Component } from "react";
import "./panel.css";

export default class Panel extends Component{
    render(){
        return(
            <div className="Panel">
                <div className="Panel-panel">
                    <br/>
                    <div>
                        <h2 className="Panel-title">{this.props.title}</h2>
                    </div>
                    <div>
                        <p className="Panel-body">{this.props.content}</p>
                    </div>
                    <br/>
                </div>
            </div>
        )
    }
}