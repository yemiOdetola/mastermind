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
                    <div className={this.state.gameWon ? 'game-won' : 'hide'}>
                        <div className="details-cover">
                            <div className="name-position">
                                <div className="name">Congrats</div>
                                <div className="position mb-4">You won!</div>
                            </div>
                            <div className="details">
                                Bla bla bla bla
                            </div>
                        </div>
                        <div className="close-modal">
                            <div className="icon-cover">
                            </div>
                        </div>
                    </div>
                    <div className={this.state.gameLost ? 'game-lost' : 'hide'}>
                        <div className="details">
                            Game Over
                        </div>
                    
                    <p>You've used up your 12 chances...replay</p>
                    </div>
                </div>
            </div>
        )
    }
}