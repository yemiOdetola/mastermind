import React from 'react'

class Check extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDuck: 1,
            exactMatches: 0,
            valueMatches: 0,
            stateRandomArray: this.props.randomArr,
            statePicks: 0
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
                console.log('exactIndexLength', exactIndexLength)
                setTimeout(() => {
                    this.setState({
                        exactMatches: exactIndexLength
                    })
                    console.log('exactMatches in state final', this.state.exactMatches)
                }, 5);
                console.log('a[i]', a[i])
                console.log('b[i]', b[i])
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
        console.log('valueMatches', distinctValues)
        return distinctValues;
    }

    increamentDuck() {
        this.setState({
            currentDuck: this.props.activatedDuck + 1
        })
        setTimeout(() => {
            this.props.getNextDuck(this.state.currentDuck)
        }, 10)
    }

    componentDidUpdate(prevProps) {
        if (this.props.injectedPicks !== prevProps.injectedPicks) {
            this.setState({
                statePicks: this.props.injectedPicks
            })
        }
        // console.log('statepicks', this.state.statePicks);
        console.log('stateRandomArray', this.state.stateRandomArray);
    }

    render() {
        let stateRandomArrayCopy = this.state.stateRandomArray.slice();
        return (
            <button className={(this.props.activatedDuck === this.props.id) ? this.props.buttonStyle : 'btn btn-small btn-default'}
                disabled={this.props.activatedDuck !== this.props.id}
                // getIndicatorValues={this.state.exactMatches, this.state.valueMatches}
                onClick={(e) => {
                    this.findIntersection(stateRandomArrayCopy, this.props.injectedPicks)
                    this.findMatch(stateRandomArrayCopy, this.props.injectedPicks)
                    this.increamentDuck()
                }
                }>Click</button>
        )
    }
}

export default Check;