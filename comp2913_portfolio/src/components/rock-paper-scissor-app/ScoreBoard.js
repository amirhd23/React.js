import React, {Component} from 'react';

class ScoreBoard extends Component {
    render() {
        return(
            <div>
                <h2>scores</h2>
                <p>computer: {this.props.computer}</p>
                <p>player:   {this.props.player}</p>
            </div>
        );
    }
}

export default ScoreBoard;