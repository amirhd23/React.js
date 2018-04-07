import React, {Component} from 'react';
import rock from './images/rock.jpg';
import paper from './images/paper.jpg';
import scissor from './images/scissors.jpg';
import './Game.css';
import ScoreBoard from './ScoreBoard';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerScore: 0,
            computerScore: 0,
            computerPick: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.message = '';
        this.gameOver = false;
    }

    computerPick() {
       let random = Math.random();
       if (random <= 0.33) {
           return 'paper';
       } else if (random <= 0.66) {
           return 'scissor';
       } else {
           return 'rock';
       }
    }

    handleClick(playerPick) {
        if (this.gameOver) {return;}
        let computerPick = this.computerPick();
        let result = this.compareChoices(playerPick, computerPick);
        if (result > 0) {
            this.setState({//computer wins the hand
                computerScore : this.state.computerScore + 1
            });
        } else if (result < 0) {
            this.setState({//player wins the hand
                playerScore : this.state.playerScore + 1
            });
        } 
        
    }


    /**
     * returns -1 if player wins, +1 if computer wins that round
     */
    compareChoices(player, computer) {
        this.setState({computerPick: computer});
        if (player === 'rock' && computer ==='paper') {
            return 1;
        } else if (player === 'rock' && computer ==='scissor') {
            return -1
        } else if (player === 'paper' && computer ==='rock') {
            return -1;
        } else if (player === 'paper' && computer ==='scissor') {
            return 1;
        } else if (player === 'scissor' && computer ==='rock') {
            return 1;
        } else if (player === 'scissor' && computer ==='paper') {
            return -1
        } else {
            return 0;
        }
    }

    handleReset() {
        this.setState({
            playerScore: 0,
            computerScore: 0,
            computerPick: ""
        });
        this.gameOver = false;
        this.message = '';
    }

    componentDidUpdate() {
        if (this.gameOver) {return;}
        const winningScore = 5;
        if (this.state.computerScore >= winningScore) {
            this.message = "Computer Won!";
            this.gameOver = true;
            this.forceUpdate();
        }
        if (this.state.playerScore >= winningScore) {
            this.message = "You Won!";
            this.gameOver = true;
            this.forceUpdate();
        }
    }

    render() {
        return (
            <div>
                <ScoreBoard computer={this.state.computerScore} player={this.state.playerScore} />
                <h2 id="message">{this.gameOver && this.message}</h2>
                <br />
                <img className="thumbnail_img" onClick={() => {this.handleClick('rock')}} src={rock} alt="rock"/>
                <img className="thumbnail_img" onClick={() => {this.handleClick('paper')}} src={paper} alt="paper"/>
                <img className="thumbnail_img" onClick={() => {this.handleClick('scissor')}} src={scissor} alt="scissor"/>
                
                <h2>Computer picked: {this.state.computerPick}</h2>
                <br />
                <button onClick={this.handleReset}>reset game</button>
            </div>
        );
    }
}

export default Game;