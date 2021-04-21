import { Button, Input } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { wikiSearch, incrementCounter, decrementCounter } from '../actions';
import CPanel from '../Components/Card/panel';

import { Collapse } from 'antd';

const { Panel } = Collapse;

class Wikipedia extends Component{
    constructor(props){
        super(props);
        this.state={
            value: '',
            actualsearch:null,
            articles: false,
            articlesList:null,
        }

        this.onAdd = this.onAdd.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.getArticle= this.getArticle.bind(this);
    }
    onChangeValue = event => {
        this.setState({ value: event.target.value });
    };

    onAdd(){
        this.props.wikiSearch(this.state.value);
        this.setState({actualsearch:this.state.value ,value:''})
    }



    getArticle(){
        if(this.state.value === ''){
            return console.log('Das Suchfeld darf nich leer sein!');
        }
        const API = `https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch=${this.state.value}`
        const body = {method:"GET", mode:"cors"}
        const myRequest = new Request(API, body)
        fetch(myRequest).then(response=> response.json()).then(data => {this.setState({articlesList: data.query.search, articles: true})} )
        this.onAdd()
    }

    
    render(){
        return(
            <div>
                <Input type="text" value={this.state.value} onChange={this.onChangeValue}/>
                <Button className="primary" onClick={this.getArticle}>Search Wikipedia</Button>
                <Button className="primary" onClick={this.props.onIncrement}>Hochzählen</Button>
                <Button className="primary" onClick={this.props.onDecrement}>Runterzählen</Button>
                <br/>
                <Collapse bordered={false}>
                    <Panel header="Search History">
                    {this.props.wiki.map((item) => {
                        return(<p>{item.hist} {item.id}</p>)
                    })}
                    </Panel>
                </Collapse>
                <br/>
                {this.state.actualsearch ? (<h1>Actual Search: {this.state.actualsearch}</h1>):null}
                <br/>
                {this.state.articles ? 
                    (this.state.articlesList.map(item => (<CPanel title={item.title} content={<div dangerouslySetInnerHTML={{__html: item.snippet}} />}>
                        
                    </CPanel>))): null
                }
                
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        wiki: state.wiki
    }
}

let mapDispatchToProps = {
    wikiSearch : wikiSearch,
    onIncrement: incrementCounter,
    onDecrement: decrementCounter
}

let WikipediaContainer = 
    connect(mapStateToProps, mapDispatchToProps)(Wikipedia);

export default WikipediaContainer;
