import { Button, Input } from "antd";
import React, { Component } from "react";
import { Row, Col, List } from 'antd';
import Checkbox from "antd/lib/checkbox/Checkbox";

export class TodoPage extends Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            todos: [],
            is_checked:[],
        }
        this.Zufuegen = this.Zufuegen.bind(this);
        this.Checked = this.Checked.bind(this);
        this.Loeschen = this.Loeschen.bind(this);
        this.ShowTodo = this.ShowTodo.bind(this);
    }

    onChangeValue = event => {
        this.setState({ value: event.target.value });
      };

    Zufuegen (){
        this.setState(state =>{
            if(this.state.value === ''){
                console.log('Leider ist das Feld leer!')
            } else {
                const todo = state.todos.push(this.state.value);
                return {todo, value:''}
            }
            
        })
    }

    Checked (d){
        this.setState(state =>{
            if(state.is_checked.includes(d)){
                state.is_checked.pop(d);
            } else{
                state.is_checked.push(d);
            }
        })
    }

    Loeschen (){
        this.setState(state =>{
            console.log(state.todo)
            this.state.is_checked.forEach(item =>{
                var filtered = state.todos.filter(e=> e !== item)
                state.todos = filtered
            })
            console.log(this.state.is_checked)
            console.log(this.state.todos)
            //           state.is_checked.forEach(item =>{
 //               state.todos.filter(item);
 //               console.log(state.todos);
 //               state.is_checked.pop(item);
 //               console.log(state.is_checked);
 //           })
        })
        return 
    }
    ShowTodo (){
        console.log(`${this.state.todos}`)
        console.log(`${this.state.is_checked}`)
    }
    
    render(){
    return(
        <Row>
            <Col xs={{span:12, offset:6}}>
                <div className="TodoPage" xs={{span:12, offset:6}}>
                    <Input type="text" 
                        value={this.state.value}
                        onChange={this.onChangeValue}>

                    </Input>

                    <List
                        header={<div>Todo-Liste</div>}
                        dataSource = {this.state.todos}
                        renderItem={(item ,index) => <List.Item><Checkbox onChange={() => this.Checked(item)}>{item} {index}</Checkbox></List.Item>}>
                    </List>
                    <Button type="button" onClick={this.Zufuegen}>Zufügen</Button>
                    <Button type="button" onClick={this.Loeschen}>Löschen</Button>
                    <Button type="button" onClick={this.ShowTodo}>Show</Button>
                </div>
            </Col>
        </Row>
    )
}
}
