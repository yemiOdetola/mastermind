import React from 'react';
import '../css/Peg.css';

export class IndicatorAll extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        let allIndiArray = [];
        for (let a = 0; a < 10; a++) {
            allIndiArray.push(
                <Indicators
                    key={a}
                    activatedDuck={this.props.activatedDuck}
                    exactMatches={this.props.exactMatches}
                    valueMatches={this.props.valueMatches}
                    currentIndi={a + 1}
                    editIndicators={(this.props.activatedDuck === (a + 1)) ? true : false}
                />
            )
        }
        return (
            <div>
                {allIndiArray}
            </div>
        )
    }
}

export class Indicators extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            exactMatches: this.props.exactMatches,
            valueMatches: this.props.valueMatches
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.exactMatches !== this.state.exactMatches) {
            this.setState({
                exactMatches: this.props.exactMatches
            })
        }
        if (this.props.valueMatches !== this.state.valueMatches) {
            this.setState({
                valueMatches: this.props.valueMatches
            })
        }
    }

    render() {
        console.log(this.props.exactMatches, this.props.valueMatches);
        let indicatorGroup = [];
        let nullMatch = -(this.state.exactMatches + this.state.valueMatches) + 4;
        let valueMatch = this.state.valueMatches;
        let exactMatch = this.state.exactMatches;
        console.log('null decider', nullMatch, 'valueMatch', valueMatch, 'exactMatch', exactMatch);
        if (this.props.editIndcators) {
            for (let i = 0; i < nullMatch; i++) {
                indicatorGroup.push(
                    <NullIndicator
                        key={`indicator${i}`}
                        setEditable={(this.props.indicatorId === this.props.activatedIndicator) ? true : false}
                    />
                )
            }
            for (let i = 0; i < valueMatch; i++) {
                indicatorGroup.push(
                    <ValueMatchesIndicator
                        setEditable={(this.props.indicatorId === this.props.activatedIndicator) ? true : false}
                        key={`Valueindicator${i}`}
                    />
                )
            }
            for (let i = 0; i < exactMatch; i++) {
                indicatorGroup.push(
                    <ExactMatchesIndicator
                        setEditable={(this.props.indicatorId === this.props.activatedIndicator) ? true : false}
                        key={`Matchindicator${i}`}
                    />
                )
            }
        } else if (this.props.activatedDuck < this.props.currentIndi) {
            return true;
        } else {
            for (let i = 0; i < 4; i++) {
                indicatorGroup.push(
                    <NullIndicator
                        key={`indicator${i}`}
                        setEditable={(this.props.indicatorId === this.props.activatedIndicator) ? true : false}
                    />
                )
            }
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

    componentDidUpdate(prevProps) {
        if (this.props.setEditable !== prevProps.setEditable) {
            this.setState({
                indicatorStyle: 'indicator'
            })
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
            indicatorStyle: 'indicator match'
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.setEditable !== prevProps.setEditable) {
            this.setState({
                indicatorStyle: 'indicator'
            })
        }
    };

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
            indicatorStyle: 'indicator intersect'
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.setEditable !== prevProps.setEditable) {
            this.setState({
                indicatorStyle: 'indicator'
            })
        }
    };

    render() {
        return (
            <div>
                <div className={this.state.indicatorStyle}></div>
            </div>
        );
    }
}