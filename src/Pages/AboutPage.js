import React,{Component} from 'react';
import CPanel from '../Components/Card/panel.js';

export class AboutPage extends Component{
    render() {
        return (
            <div className="AboutPage">
                <CPanel title="Das soll die Überschrift sein" content="Hier kommt dann ein bisschen Inhalt rein" />
                <br />
                <CPanel title="Das soll die zweite Überschrift sein" content="Zweiter Inhalt" />
            </div>
        )}}
