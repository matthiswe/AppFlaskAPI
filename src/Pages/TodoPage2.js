import { Button, Input } from "antd";
import React, { Component } from "react";
import { Row, Col } from 'antd';
import { Checkbox } from 'antd';

export class TodoPage2 extends Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            allChecked: false,
            todos: [],
            checkedValues:[],
        }
        this.Zufuegen = this.Zufuegen.bind(this);
        this.ShowTodo = this.ShowTodo.bind(this);
        this.Loeschen = this.Loeschen.bind(this);
        this.onChangeCheck = this.onChangeCheck.bind(this);
    }

    Loeschen (){
        var newtodo = []
        this.state.todos.forEach(item =>{
            if(!this.state.checkedValues.includes(item)){
                newtodo.push(item)
            }
        });
        this.setState(state =>{ 
            return {todos: newtodo, checkedValues:[]}})
        }


    onChangeCheck = event => {
        this.setState({ checkedValues: event })
    };

    onChangeValue = event => {
        this.setState({ value: event.target.value });
    };

    Zufuegen (){
        this.setState(state =>{
            if(this.state.value === ''){
                console.log('Leider ist das Feld leer!')
            } else {
                var val = this.state.value
                const todo = state.todos.push(val);
                return {todo, value:''}
            }
            
        })
    }

    ShowTodo (){
        console.log(`${this.state.todos}`)
        console.log(`${this.state.checkedValues}`)
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
                    <Checkbox.Group onChange={this.onChangeCheck}>
                        {this.state.todos.map(todo =>(
                            <Row><Col span={12}><Checkbox value={todo}>{todo}</Checkbox></Col></Row>
                        ))}
                    </Checkbox.Group>
                    <br></br>
                    <Button type="button" onClick={this.Zufuegen}>Zufügen</Button>
                    <Button type="button" onClick={this.Loeschen}>Löschen</Button>
                    <Button type="button" onClick={this.ShowTodo}>Show</Button>
                </div>
            </Col>
        </Row>
    )
}
}
