import React, { Component } from 'react';


export default class StatesConcept extends Component{

    constructor(){
        super();
        this.state = {
            name: "Jagan Mohan Reddy D"
        }
    }

    changeState(){
        this.setState({
            name: "Welcome to APSSDC web Development using ReactJS"
        });
    }

    render(){
        return(
            <div>
                <h1>Hi..! {this.state.name}</h1>
                <button onClick={ ()=> this.changeState()}>Click Me..!</button>
            </div>
        );
    }

}