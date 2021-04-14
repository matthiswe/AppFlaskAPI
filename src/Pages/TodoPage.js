import { Button, Input, Space, Switch } from "antd";
import React, { Component } from "react";
import { Row, Col, List } from 'antd';
import { Checkbox } from 'antd';
import { DeleteOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons'

export class TodoPage extends Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            input:'',
            checkedAll:false,
            todos: [],
        }
        this.addTodo = this.addTodo.bind(this);
        this.deleteChecked = this.deleteChecked.bind(this);
        this.onChangeCheck = this.onChangeCheck.bind(this);
        this.CheckAndDel = this.CheckAndDel.bind(this);
        this.showInput = this.showInput.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.checkAll = this.checkAll.bind(this);
    }

    deleteChecked (){
        var newTodo = [];
        this.state.todos.map(item =>{
            if(item.checked === false) newTodo.push({id:(newTodo.length +1), content: item.content, checked:false, showInputForm:false});
            return {newTodo}
        })
        this.setState({todos : newTodo, checkedAll: false})
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
        var newTodo = [];
        this.state.todos.map(item =>{
            if(item.id !== event) newTodo.push({id:(newTodo.length +1), content: item.content, checked:false, showInputForm:false});
            return {newTodo}
        })
        this.setState({todos : newTodo})
    }
    

    onChangeValue = event => {
        this.setState({ value: event.target.value });
    };
    onChangeInput = event => {
        this.setState({ input: event.target.value });
    };

    changeInput (item){
        if(this.state.input === ''){
            this.setState(this.state.todos.map(list =>{
                list.showInputForm = false;
                return {list}
        }));
        return; }

        this.setState(this.state.todos.map(list =>{
            if(list.id === item.id) list.content = this.state.input;
            list.showInputForm = false;
            return {list}
        })
        )
        this.setState({input:''})
    }

    addTodo (){
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
            todos.push({id: (maxID +1), content: val, checked :false, showInputForm:false});    
        }
        this.setState({
            todos: todos,
            value:''
        })
    }

    showInput(event){
        this.setState(this.state.todos.map(list =>{
            if(list.id === event.id && event.showInputForm ===false) list.showInputForm =true;
            else list.showInputForm =false;
            return {list}
        }))
    }

    checkAll (event){
        this.setState(this.state.todos.map(item =>{
            item.checked = event;
            return {item}
        }))
        this.setState({checkedAll: event})
    }
    
    render(){
        let buttoncolor = this.state.value.length <1 ? "white": "green";
        let buttontextcolor = this.state.value.length <1 ? "black": "white";
        return(
            <Row>
                <Col xs={{span:12, offset:6}} style={{backgroundColor:'lightblue'}}>
                    <div className="TodoPage" xs={{span:20, offset:2}} >
                        <Input type="text" 
                            value={this.state.value}
                            onChange={this.onChangeValue}
                            onPressEnter={this.addTodo}>
                        </Input>
                        <br></br>
                        <br></br>
                        <div style={{  display: 'flex', justifyContent: 'center' }}>
                            <Button type="button" style={{ backgroundColor :buttoncolor, color: buttontextcolor}} onClick={this.addTodo}>Zufügen</Button>
                            <Button type="button" onClick={this.deleteChecked}>Löschen</Button>
                        </div>
                        <br></br>
                        <List
                          header={<h1>To Do Liste</h1>}
                          footer={<Switch checked={this.state.checkedAll} onChange={this.checkAll}></Switch>}
                          bordered
                          dataSource={this.state.todos}
                          renderItem={item => (
                            <List.Item key={item.id} style={{display: 'flex', backgroundColor:'grey', color:'white'}}>
                                <div>
                                    <Space>
                                    <Checkbox  value={item} checked={item.checked} onChange={this.onChangeCheck} />
                                        {item.id}: {item.content}
                                    </Space>
                                </div>
                                <div>
                                    <Space>
                                        {item.showInputForm ?   
                                            <div style={{float: 'left'}} >
                                                <Input type="text" style={{width: 100,height:30}} onChange={this.onChangeInput} onPressEnter={this.changeInput.bind(this, item)}/>
                                                <Button type="primary" shape="circle" icon={<SaveOutlined style={{color:"yellow"}}/>} onClick={this.changeInput.bind(this, item)}/>
                                            </div>    
                                            :
                                            <div style={{float: 'left'}} >
                                                <Button type="primary" shape="circle" icon={<EditOutlined style={{color:"pink"}}/>} onClick={this.showInput.bind(this, item)} />
                                            </div>}
                                        <Button type="primary" shape="circle" style={{float:'right'}} icon={<DeleteOutlined />} onClick={this.CheckAndDel.bind(this, item.id)}/>
                                    </Space>
                                </div>
                            </List.Item>
                          )}
                        />
                    </div>
                </Col>
            </Row>
        )
}
}
