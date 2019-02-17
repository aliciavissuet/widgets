import React from 'react';
import Names from './Names';
import InputForm from './InputForm';

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [],
            matches:[]
            
        };
        this.addName = this.addName.bind(this);
        this.addText = this.addText.bind(this);
        this.seeMatches = this.seeMatches.bind(this);
    }
    addName(e){
        e.preventDefault();
        console.log(this.state.input)
        this.setState({ names:this.state.names.concat([this.state.input])});
        this.inputTitle.value='';
    }

    addText(e){
        this.setState({input:e.target.value});
    }

    seeMatches(matches){
        this.setState({matches})
        // this.setState({match});
        // let matches = this.state.names.filter((name) => name.includes(this.state.match));
        console.log(matches);
        console.log(this.state.matches);
        // this.state.names.forEach((n) => {
        //     if (n.includes(name)) {
        //         matches.push(n);
        //     }
        // });
        // this.setState({matches});
    }
   
    render() {
        // const matches = this.state.names.filter((name) => name.includes(this.state.match));

        return (
            <div className='auto'>
                
                <section className='auto-matches'>
                    <InputForm seeMatches={this.seeMatches} names={this.state.names} />
                    <ul className='list'>Matching Names:
                        {this.state.matches.map((match, i) => <li key={i}>{match}</li>)}
                    </ul>
                </section>
                <section className='auto-add'>
                    <div>
                        <label>Add a name here</label>
                        <br/>
                        <input ref={el => this.inputTitle = el} type="text" onChange={this.addText}/>
                        <button onClick={this.addName}>Add Name!</button>
                    </div>
                    <ul className='list'>
                        <Names names={this.state.names} />
                    </ul>

                </section>
            </div>
        );
    }
}

export default Autocomplete;