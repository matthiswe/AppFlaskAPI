import React, { Component } from 'react';
import { addTodo } from '../actions/index';
import { connect } from 'react-redux';
import { Input, Button } from 'antd';
import CPanel from '../Components/Card/panel';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={
            value: '',
        }

        this.onChangeValue = this.onChangeValue.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }
    onChangeValue = event => {
        this.setState({ value: event.target.value });
    };

    onAdd(){
        this.props.addTodo(this.state.value)
        console.log(this.props.todos)
        this.setState({value:''})
    }

    render() {
        return (
            <div>
                <Input type="text" value={this.state.value} onChange={this.onChangeValue}></Input><Button onClick={this.onAdd}>Add Todo</Button>
                <CPanel title={<h1>Todos</h1>} content= {this.props.todos.map((todo) => {
                            return (<p>{todo.id} {todo.title}</p>)})}>
                </CPanel>
                
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

let mapDispatchToProps = {
    addTodo: addTodo
}

let TodoListContainer = 
    connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
