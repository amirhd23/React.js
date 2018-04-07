import React, {Component} from 'react';
import './StopWatch.css';

class StopWatch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            milliseconds : 0,
            minutes : 0,
            label: "Stop",
            intervalHandle : null,
            running: true
        };
        this.handlePause = this.handlePause.bind(this);
        this.handleTimer = this.handleTimer.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount() {
       this.setState({
           intervalHandle : setInterval(this.handleTimer, 
            this.props.increment)
       });
    }

    handlePause() {
        if (this.state.running) {//pause the timer
            clearInterval(this.state.intervalHandle);
            this.setState({label: "Start", running: false});
        } else {//start the timer
            this.setState({
                intervalHandle : setInterval(this.handleTimer, 
                    this.props.increment),
                    label: "Stop", 
                    running: true
            });
        }
    }

    handleReset() {
        clearInterval(this.state.intervalHandle);
        this.setState({
            milliseconds : 0,
            minutes : 0,
            label: "Start",
            intervalHandle : null,
            running: false
        });
    }

    handleTimer() {
        if (this.state.milliseconds >= 60000 - this.props.increment) {
            this.setState({
                milliseconds : 0,
                minutes : this.state.minutes + 1
            }); 
        } else {
            this.setState({
                milliseconds : this.state.milliseconds + Number(this.props.increment)
            });
        }
    }

    render() {
        return (
            <div>
                <h1>StopWatch</h1>
                <h2>
                    minutes : seconds : milliseconds
                </h2>
                <h2>
                <span class="digital">
                    <span class="fixed-width">{this.state.minutes} </span> :
                    <span class="fixed-width">{Math.floor(this.state.milliseconds/1000)} : </span>
                    <span class="fixed-width">{this.state.milliseconds % 1000}</span>
                </span>   
                </h2>
                <div>
                    <button id="start-button" onClick={this.handlePause}>{this.state.label}</button>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        );
    }
}

export default StopWatch;