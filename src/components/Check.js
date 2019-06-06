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
                delete a[i]
                delete b[i]

            } else {
                intersect[i] = 0;
            }
        }
        console.log('a', a, 'b', b);
        console.log('intersection', intersect);
        // let matchArr = [];
        // intersect.forEach(el => {
        //     if (el > 0) {
        //         matchArr.push(el);
        //         let matchLength = matchArr.length
        //         setTimeout(() => {
        //             this.setState({
        //                 exactMatches: matchLength
        //             })
        //             console.log('exactMatchFromArray', this.state.exactMatches)
        //         }, 10);

        //     }
        // })

    }
    findMatch(a, b) {
        let foundMatches = [];
        let distinctValues;
        for (let i = 0; i < a.length; i++) {
            for (let y = 0; y < b.length; y++) {
                if (a[i] === b[y]) {
                    foundMatches.push(a[i]);
                    distinctValues = [...new Set(foundMatches)]
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
        console.log('statepicks', this.state.statePicks);
        console.log('stateRandomArray', this.state.stateRandomArray);
    }

    render() {
        return (
            <button className={(this.props.activatedDuck === this.props.id) ? this.props.buttonStyle : 'btn btn-small btn-default'}
                disabled={this.props.activatedDuck !== this.props.id}
                // getIndicatorValues={this.state.exactMatches, this.state.valueMatches}
                onClick={(e) => {
                    this.findIntersection(this.props.randomArr, this.props.injectedPicks)
                    this.findMatch(this.props.randomArr, this.props.injectedPicks)
                    this.increamentDuck()
                }
                }>Click</button>
        )
    }
}

export default Check;