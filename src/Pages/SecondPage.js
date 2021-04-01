import {Button} from 'antd';
import React, { Component } from 'react';

export default class SecondPage extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0,
        }
        this.HochZaehlen = this.HochZaehlen.bind(this)
        this.RunterZaehlen = this.RunterZaehlen.bind(this)
    }
    HochZaehlen (){
        this.setState({
            counter: this.state.counter +1
        })
    }

    RunterZaehlen () {
        if(this.state.counter === 0){
            alert("Zähler kann nicht kleiner als 0 sein")
        } else{
            this.setState({
                counter: this.state.counter -1
        })}
    }

    render() {
        if(this.state.counter > 5){
            alert("langsam wird es zu viel")
        }
        return(
            <div className="SecondPage">
                <p>{this.state.counter}</p>
                <Button className="Button1-style" onClick={this.HochZaehlen}>Hoch</Button>
                <br></br>
                <Button onClick={this.RunterZaehlen}>Runter</Button>
            </div>
            
        )
    }
}
