import React from 'react';
import { Link } from 'react-router-dom';
import '../css/explore.css';

export default class Explore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gameRules: false
        }
    }

    render() {
        return (
            <div className="body-cover">
                <div className="name">
                    Mastermind
                </div>
                <div className="contain">
                    <div className="loose-cover">
                        <div className="welcome-title">
                            Heyy! <span role="img" aria-label="waving"> &#x1F44B;</span>, would you like to
                        </div>
                        <div className="actions">
                            <button className="action primary"><Link to="/mastermind">Play a Game</Link></button>
                            <button className="action secondary" onClick={
                                () => {
                                    this.setState({
                                        gameRules: !(this.state.gameRules)
                                    })
                                }
                            }>Learn how</button>
                        </div>
                    </div>
                </div>
                <div className="instructions">
                    <button className="instruct">i</button>
                </div>
                <div className={this.state.gameRules ? "game-status fade-in" : "hide"}>
                    <div className="game-status-body how-to">
                        <div className="close-modal" onClick={
                            () => {
                                this.setState({
                                    gameRules: !(this.state.gameRules)
                                })
                            }
                        }>
                            <svg
                                width="18px"
                                height="18px"
                                viewBox="0 0 18 18"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xlink="http://www.w3.org/1999/xlink">
                                <defs></defs>
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Bold_Close" transform="translate(-23.000000, -23.000000)" fill="#221F20">
                                        <polygon
                                            transform="translate(32.142136, 32.142136) rotate(45.000000) translate(-32.142136, -32.142136) "
                                            points="30.1421356 22.1421356 30.1421356 30.1421356 22.1421356 30.1421356 22.1421356 34.1421356 30.1421356 34.1421356 30.1421356 42.1421356 34.1421356 42.1421356 34.1421356 34.1421356 42.1421356 34.1421356 42.1421356 30.1421356 34.1421356 30.1421356 34.1421356 22.1421356"
                                        ></polygon>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="how-to-body">
                            <div className="modal-title">GAME RULES</div>
                            <p className="mt-4">Basically, a secret color code "4" has been generated for each game. The aim is to guess the color code in the right pattern (both color and port) in 10 attempts.</p>
                            <p>You'll be provided with 6 colors to choose from for your guess. The secret color code is generated from the 6-colors too. Duplicates are allowed, so the four secret color code might even be the same color.</p>
                            <p>After submitting your guess in each instance, a color in the right position, gets you a green point. And a right color in the wrong position gets you a grey-like point.</p>
                            <br/>
                            <p>Still curious? check this <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)" rel="noopener noreferrer" target="_blank">wikipedia</a> page.</p>
                        </div>
                    </div>
                </div >
            </div>

        )
    }
}