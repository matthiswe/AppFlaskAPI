import React, { Component } from "react";
import "./button.css";

export default class Button1 extends Component{
    render(){
        return(
            <div className="Button1">
                <p className="Button1-style">{this.props.text}</p>
            </div>
        )
    }
}
