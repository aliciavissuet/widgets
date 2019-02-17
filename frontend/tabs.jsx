import React from 'react';
import Pane from './pane';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPane:2
        };
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(e){
        e.preventDefault();
        this.setState({currentPane: parseInt(e.target.className)});
    }
    
    render() {
        return (
            <div className='tabs'>
                <ul className='tab-selector'>
                    <li className='0' onClick={this.changeTab} id={this.state.currentPane===0 ? 'selected' : ''}>
                        Clock
                    </li>
                    <li className='1' onClick={this.changeTab} id={this.state.currentPane === 1 ? 'selected' : ''}>
                        Weather
                    </li>
                    <li className='2' onClick={this.changeTab} id={this.state.currentPane === 2 ? 'selected' : ''}>
                        AutoComplete
                    </li>
                </ul>
                <Pane currentPane={this.state.currentPane} />
            </div>
        );
    }
}

export default Tabs;