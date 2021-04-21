import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Menu} from "antd";
import { Link } from "react-router-dom";

class Navigation extends Component{
    constructor(props) {
        super(props);

        this.routeName = this.routeName.bind(this);
    }
    routeName(e){
        switch(e) {
            case 'Second':
                return (this.props.counter)
            case 'TodoRed':
                return (this.props.todosCount)
            default:
                return null
          }
    }
    render() {
        return(
            <div className="Navigation">
                <Menu theme="dark" mode="inline">
                    {this.props.menuitems.map(( route, index) =>(
                      <Menu.Item key={index} icon={route.item}>
                        <Link key={index} to={route.path} exact={`${route.exact}`}>{route.name} {this.routeName(route.name)}</Link>
                      </Menu.Item>
                    ))}
                </Menu>
            </div>
            
        )
    }
}

let mapStateToProps = (state) => {
    return {
        counter: state.counter,
        todosCount: state.todos.length
    }
}

let mapDispatchToProps = {}

let NavigationContainer = 
    connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default NavigationContainer;
