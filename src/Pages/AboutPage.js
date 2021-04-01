import React,{Component} from 'react';
import Panel from '../Components/Card/panel.js';

export class AboutPage extends Component{
    render() {
        return (
            <div className="AboutPage">
                <Panel title="Das soll die Überschrift sein" content="Hier kommt dann ein bisschen Inhalt rein" />
                <br />
                <Panel title="Das soll die zweite Überschrift sein" content="Zweiter Inhalt" />
            </div>
        )}}
