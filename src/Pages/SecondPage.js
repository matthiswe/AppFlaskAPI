import {Button} from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions';

class SecondPage extends Component{
    render() {
        return(
            <div className="SecondPage">
                <h1>{this.props.counter}</h1>
                <Button className="Button1-style" onClick={this.props.onIncrement}>Hoch</Button>
                <br></br>
                <Button onClick={this.props.onDecrement}>Runter</Button>
            </div>
            
        )
    }
}

let mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

let mapDispatchToProps = {
    onIncrement: incrementCounter,
    onDecrement: decrementCounter
}

let SecondPageContainer = 
    connect(mapStateToProps, mapDispatchToProps)(SecondPage);

export default SecondPageContainer;
