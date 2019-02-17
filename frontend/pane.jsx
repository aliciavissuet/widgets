import React, { Component } from 'react';
import Clock from './clock';
import Weather from './Weather';
import Autocomplete from './Autocomplete';

class Pane extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            panes: [
                <Clock />, 
                <Weather />, 
                <Autocomplete />,
            ]    
        };
    }

    render(){
        // const obj = {0: {Clock}, 1: {Weather}, 2:{Autocomplete}};
        return (
            <div className='pane'>
                <span>{this.state.panes[this.props.currentPane]}</span>
            </div>
        );
    }
}

export default Pane;