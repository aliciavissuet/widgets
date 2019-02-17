import React from 'react';
import ReactDom from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
        this.tick = this.tick.bind(this);
    }

    tick(){
        this.setState({time: new Date()});
    }

    componentDidMount(){
        this.timeInterval = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timeInterval);
    }

    render() {
        return (
            <div className='clock'>
                <section className='date'>
                    <span>Date:</span>
                    <span>{this.state.time.toDateString()}</span>
                </section>
                <section className='time'>
                    <span>Time: </span>
                    <span>{this.state.time.toLocaleTimeString()} </span>
                </section>
            </div>
        )
    }
}
export default Clock;