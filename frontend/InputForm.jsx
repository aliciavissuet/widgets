import React from 'react';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.addText = this.addText.bind(this);
    }
    addText(e) {
        let text = e.target.value
        let matches;
        if (text.length>0) {
            matches = this.props.names.filter((name) => name.includes(text));
        } else {
            matches = [];
        }
        this.props.seeMatches(matches);
        // this.setState({ input: e.target.value });
        
    }
    componentDidUpdate(){
        
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.addText} />
                <br/>
                <label>Find a name</label>
            </div>
        );
    }
}

export default InputForm;