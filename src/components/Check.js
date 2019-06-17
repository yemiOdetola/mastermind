import React from 'react'

class Check extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDuck: 1,
            stateRandomArray: this.props.randomArr,
            statePicks: this.props.injectedPicks
        }
        this.findIntersection = this.findIntersection.bind(this);
        this.findMatch = this.findMatch.bind(this);
        this.increamentDuck = this.increamentDuck.bind(this);
    }

    findIntersection(a, b) {
        let intersect = [];
        let exactIndexed = [];
        for (var i = 0; i < Math.min(a.length, b.length); i++) {
            if (a[i] === b[i]) {
                intersect[i] = a[i];
                exactIndexed.push(intersect[i]);
                let exactIndexLength = exactIndexed.length;
                // setTimeout(() => {
                    this.props.getExactMatches(exactIndexLength);
                // }, 5);
                delete a[i];
                delete b[i];

            } else {
                intersect[i] = 0;
            }
        }
        console.log('a', a, 'b', b, 'alength', a.length, 'blength', b.length);
    }
    findMatch(a, b) {
        let foundMatches = [];
        let distinctValues;
        for (let i = 0; i < a.length; i++) {
            for (let y = 0; y < b.length; y++) {
                if (typeof a[i] === 'number' && typeof b[y] === 'number') {
                    if (a[i] === b[y]) {
                        foundMatches.push(a[i]);
                        distinctValues = [...new Set(foundMatches)]
                    }
                }
            }
        }
        console.log('distinct Values before', distinctValues);
        let valMatch, valMatchLength;
        if (typeof distinctValues !== 'undefined') {
            valMatch = distinctValues.slice();
            valMatchLength = valMatch.length;
        } else {
            valMatchLength = 0
        }
            this.props.getValueMatches(valMatchLength);
    }

    increamentDuck() {
        this.setState({
            currentDuck: this.props.activatedDuck + 1
        })
        setTimeout(() => {
            this.props.getNextDuck(this.state.currentDuck, this.state.currentDuck)
        }, 1)
    }

    componentDidUpdate(prevProps) {
        if (this.props.injectedPicks !== this.state.statePicks) {
            this.setState({
                statePicks: this.props.injectedPicks
            })
        }
        console.log('stateRandomArray', this.state.stateRandomArray);
    }

    render() {
        let stateRandomArrayCopy = this.state.stateRandomArray.slice();
        let stateInjectedPicksCopy = this.state.statePicks.slice();
        return (
            <button className={(this.props.activatedDuck === this.props.id) ? this.props.buttonStyle : 'btn btn-small btn-default'}
                disabled={this.props.activatedDuck !== this.props.id}
                onClick={(e) => {
                    this.findIntersection(stateRandomArrayCopy, stateInjectedPicksCopy)
                    this.findMatch(stateRandomArrayCopy, stateInjectedPicksCopy)
                    this.increamentDuck()
                }
                }>Click</button>
        )
    }
}

export default Check;