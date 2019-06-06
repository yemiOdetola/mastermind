import React from 'react';
import '../css/Peg.css';

export class Indicators extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            exactMatches: 1,
            valueMatches: 2
        }
    }

    render() {
        let indicatorGroup = [];
        let nullDecider = -(this.state.exactMatches + this.state.valueMatches) + 4;
        console.log('null decider', nullDecider);
        for (let i = 0; i < nullDecider; i++) {
            indicatorGroup.push(
                <NullIndicator
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


export class NullIndicator extends React.Component {
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

export class ValueMatchesIndicator extends React.Component {
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

export class ExactMatchesIndicator extends React.Component {
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