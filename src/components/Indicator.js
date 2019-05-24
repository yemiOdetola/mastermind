import React from 'react';
import '../css/Peg.css';

export class Indicators extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let indicatorGroup = [];
        for (let i = 0; i < 4; i++) {
            indicatorGroup.push(
                <EachIndicator
                    key={`indicator${i}`}
                />
            )
        }
        return (
            <div className="indicators">
                {indicatorGroup}
            </div>
        )
    }
}


export class EachIndicator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            indicatorStyle: 'indicator'
        }
    }

    render() {
        return (
            <div>
                <div className={this.state.indicatorStyle}></div>
            </div>
        );
    }
}