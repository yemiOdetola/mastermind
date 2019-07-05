import React from 'react';


export class GameStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameLost: this.props.gameLost,
            gameWon: this.props.gameWon,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.gameLost !== this.state.gameLost) {
            this.setState({
                gameLost: this.props.gameLost
            })
        }
        if (this.props.gameWon !== this.state.gameWon) {
            this.setState({
                gameWon: this.props.gameWon
            })
        }
    }

    render() {
        return (
            <div className="game-status">
                <div className="game-status-body">
                    <div className="close-modal" onClick={() => { this.props.restartGame() }}>
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
                    <div className={this.state.gameWon ? 'game-won white-bg fade-in' : 'hide'}>
                        <div className="modal-title">You Won!</div>
                        <p className="sub-title"><span role="img" aria-label="raised hands">&#x1F64C; </span> wawuu <span role="img" aria-label="raised hands"> &#x1F64C;</span>... MindMaster <span role="img" aria-label="raised hands"> &#x1F44A;
                        </span></p>
                        <div className="emoji-cover">
                            <img src="/images/applaud.gif" alt="sorry" />
                        </div>
                        <button onClick={() => {
                            this.props.restartGame()
                        }} className="primary-btn">Replay</button>
                    </div>
                    <div className={this.state.gameLost ? 'game-lost fade-in' : 'hide'}>
                        <div className="modal-title">Game Over!</div>
                        <p className="sub-title"><span role="img" aria-label="raised hands">&#x1F61C; </span>You've used up your chances. <span role="img" aria-label="raised hands"> &#x1F606;</span><span role="img" aria-label="raised hands"> &#x1F643;</span></p>
                        <div className="emoji-cover">
                            <img src="/images/tenor.gif" alt="sorry" />
                        </div>
                        <button onClick={() => {
                            this.props.restartGame()
                        }} className="primary-btn">Replay</button>
                    </div>
                </div>
            </div >
        )
    }
}