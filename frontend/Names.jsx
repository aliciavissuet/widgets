import React from 'react';

class Names extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const names = this.props.names;
        return (
            <div>
                {names.map((name, i) => 
                <li key={i}>{name}</li>)}
            </div>
        );
    }
}

export default Names;