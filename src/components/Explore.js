import React from 'react';
import '../css/explore.css';

export default class Explore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            noUseless: 'constructor'
        }
    }

    render() {
        return (
            <div className="body-cover">
                <div className="contain">
                    <div className="loose-cover">
                        <div className="welcome-title">
                            Heyy! <span role="img" aria-label="waving"> &#x1F44B;</span>, would you like to
                        </div>
                        <div className="actions">
                            <button className="action primary">Play a Game</button>
                            <button className="action secondary">How to Play</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}