import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './Weather';
import Autocomplete from './Autocomplete';

function Root() {
    return (
        <div>
            <h1>React is working.</h1>
            
            <div><Tabs/></div>
            
        </div>
    );
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root />, document.getElementById('root'));
});