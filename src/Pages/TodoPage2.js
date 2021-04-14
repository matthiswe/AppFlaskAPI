import { Button, Input } from "antd";
import React, { Component } from "react";
import { Row, Col, List } from 'antd';
import { Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'

export class TodoPage2 extends Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            allChecked: false,
            todos: [],
        }
        this.Zufuegen = this.Zufuegen.bind(this);
        this.Loeschen = this.Loeschen.bind(this);
        this.onChangeCheck = this.onChangeCheck.bind(this);
        this.CheckAndDel = this.CheckAndDel.bind(this);
    }

    Loeschen (){
        var newTodo = [];
        this.state.todos.map(item =>{
            if(item.checked === false) newTodo.push({id:(newTodo.length +1), content: item.content, checked:false});
            return {newTodo}
        })
        this.setState({todos : newTodo})
    }


    onChangeCheck =event => {
        const conten1t = event.target.value.content;
        const checked = event.target.checked;
        this.setState(this.state.todos.map(list =>{
            if(list.content === conten1t) list.checked = checked;
            return {list}
        }))
    }

    CheckAndDel =event =>{
        console.log(event)
        var newTodo = [];
        this.state.todos.map(item =>{
            if(item.id !== event) newTodo.push({id:(newTodo.length +1), content: item.content, checked:false});
            return {newTodo}
        })
        this.setState({todos : newTodo})
    }
    

    onChangeValue = event => {
        this.setState({ value: event.target.value });
    };

    Zufuegen (){
        let todos = this.state.todos;
        let maxID = 0;
        for(let todo of todos){
            if(todo.id > maxID){
                maxID =todo.id
            }
        }
        if(this.state.value === ''){
            console.log('Leider ist das Feld leer!')
            return ;
        } else {
            var val = this.state.value
            todos.push({id: (maxID +1), content: val, checked :false});
            
        }
        this.setState({
            todos: todos,
            value:''
        })
    }
    
    render(){
        return(
            <Row>
                <Col xs={{span:12, offset:6}} style={{backgroundColor:'lightblue'}}>
                    <div className="TodoPage" xs={{span:12, offset:6}} >
                        <Input type="text" 
                            value={this.state.value}
                            onChange={this.onChangeValue}>
                        </Input>
                        <br></br>
                        <br></br>
                        <div style={{  display: 'flex', justifyContent: 'center' }}>
                            <Button type="button" onClick={this.Zufuegen}>Zufügen</Button>
                            <Button type="button" onClick={this.Loeschen}>Löschen</Button>
                        </div>
                        <br></br>
                        <List
                          header={<h1>To Do Liste</h1>}
                          bordered
                          dataSource={this.state.todos}
                          renderItem={item => (
                            <List.Item key={item.id} style={{backgroundColor:'lightgreen', color:'white'}}>
                                <Checkbox  value={item} checked={item.checked} onChange={this.onChangeCheck} />
                                    __{item.id}: {item.content}
                                <Button type="primary" shape="circle" style={{float:'right'}} icon={<DeleteOutlined />} onClick={this.CheckAndDel.bind(this, item.id)}></Button>
                           </List.Item>
                          )}
                        />
                    </div>
                </Col>
            </Row>
        )
}
}
