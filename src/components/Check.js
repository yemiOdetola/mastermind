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
                if (this.props.activatedDuck === 1) {
                    let exactIndexLength = exactIndexed.length;
                    this.props.getExactMatches(exactIndexLength);
                }
                if (this.props.activatedDuck === 2) {
                    let exactIndexLength2 = exactIndexed.length;
                    this.props.getExactMatches2(exactIndexLength2)
                }
                if (this.props.activatedDuck === 3) {
                    let exactIndexLength3 = exactIndexed.length;
                    this.props.getExactMatches3(exactIndexLength3)
                }
                if (this.props.activatedDuck === 4) {
                    let exactIndexLength4 = exactIndexed.length;
                    this.props.getExactMatches4(exactIndexLength4)
                }
                if (this.props.activatedDuck === 5) {
                    let exactIndexLength5 = exactIndexed.length;
                    this.props.getExactMatches5(exactIndexLength5)
                }
                if (this.props.activatedDuck === 6) {
                    let exactIndexLength6 = exactIndexed.length;
                    this.props.getExactMatches6(exactIndexLength6)
                }
                if (this.props.activatedDuck === 7) {
                    let exactIndexLength7 = exactIndexed.length;
                    this.props.getExactMatches7(exactIndexLength7)
                }
                if (this.props.activatedDuck === 8) {
                    let exactIndexLength8 = exactIndexed.length;
                    this.props.getExactMatches8(exactIndexLength8)
                }
                if (this.props.activatedDuck === 9) {
                    let exactIndexLength9 = exactIndexed.length;
                    this.props.getExactMatches9(exactIndexLength9)
                }
                if (this.props.activatedDuck === 10) {
                    let exactIndexLength10 = exactIndexed.length;
                    this.props.getExactMatches10(exactIndexLength10)
                }
                if (this.props.activatedDuck === 11) {
                    let exactIndexLength11 = exactIndexed.length;
                    this.props.getExactMatches11(exactIndexLength11)
                }
                if (this.props.activatedDuck === 12) {
                    let exactIndexLength12 = exactIndexed.length;
                    this.props.getExactMatches12(exactIndexLength12)
                }
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
        let valMatch;
        if (typeof distinctValues !== 'undefined') {
            valMatch = distinctValues.slice();
            if (this.props.activatedDuck === 1) {
                let valMatchLength = valMatch.length;
                this.props.getValueMatches(valMatchLength);
            }
            if (this.props.activatedDuck === 2) {
                let valMatchLength2 = valMatch.length;
                this.props.getValueMatches2(valMatchLength2);
            }
            if (this.props.activatedDuck === 3) {
                let valMatchLength3 = valMatch.length;
                this.props.getValueMatches3(valMatchLength3);
            }
            if (this.props.activatedDuck === 4) {
                let valMatchLength4 = valMatch.length;
                this.props.getValueMatches4(valMatchLength4);
            }
            if (this.props.activatedDuck === 5) {
                let valMatchLength5 = valMatch.length;
                this.props.getValueMatches5(valMatchLength5);
            }
            if (this.props.activatedDuck === 6) {
                let valMatchLength6 = valMatch.length;
                this.props.getValueMatches6(valMatchLength6);
            }
            if (this.props.activatedDuck === 7) {
                let valMatchLength7 = valMatch.length;
                this.props.getValueMatches7(valMatchLength7);
            }
            if (this.props.activatedDuck === 8) {
                let valMatchLength8 = valMatch.length;
                this.props.getValueMatches8(valMatchLength8);
            }
            if (this.props.activatedDuck === 9) {
                let valMatchLength9 = valMatch.length;
                this.props.getValueMatches9(valMatchLength9);
            }
            if (this.props.activatedDuck === 10) {
                let valMatchLength10 = valMatch.length;
                this.props.getValueMatches10(valMatchLength10);
            }
            if (this.props.activatedDuck === 11) {
                let valMatchLength11 = valMatch.length;
                this.props.getValueMatches11(valMatchLength11);
            }
            if (this.props.activatedDuck === 12) {
                let valMatchLength12 = valMatch.length;
                this.props.getValueMatches12(valMatchLength12);
            }
        } else {
            return 0;
        }
    }

    increamentDuck() {
        if (this.props.activatedDuck === 12) {
            this.props.updateGamelost(true);
        }
        setTimeout(() => {
            if (this.props.exactMatches === 4) {
                this.props.updateGameWon(true);
            } else {
                this.props.notMatched(true)
            }
            if (this.props.exactMatches2 === 4) {
                this.props.updateGameWon(true);
            } else {
                this.props.notMatched(true)
            }
            if (this.props.exactMatches3 === 4) {
                this.props.updateGameWon(true);
            } else {
                this.props.notMatched(true)
            }
            if (this.props.exactMatches4 === 4) {
                this.props.updateGameWon(true);
            } else {
                this.props.notMatched(true)
            }
            if (this.props.exactMatches5 === 4) {
                this.props.updateGameWon(true);
            } else {
                this.props.notMatched(true)
            }
            if (this.props.exactMatches6 === 4) {
                this.props.updateGameWon(true);
            } else {
                this.props.notMatched(true)
            }
            if (this.props.exactMatches7 === 4) {
                this.props.updateGameWon(true);
            } else {
                this.props.notMatched(true)
            }
            if (this.props.exactMatches8 === 4) {
                this.props.updateGameWon(true);
            } else {
                this.props.notMatched(true)
            }
            if (this.props.exactMatches9 === 4) {
                this.props.updateGameWon(true);
            } else {
                this.props.notMatched(true)
            }
            if (this.props.exactMatches10 === 4) {
                this.props.updateGameWon(true);
            } else {
                this.props.notMatched(true)
            }
            if (this.props.exactMatches11 === 4) {
                this.props.updateGameWon(true);
            } else {
                this.props.notMatched(true)
            }
            if (this.props.exactMatches12 === 4) {
                this.props.updateGameWon(true);
            } else {
                this.props.notMatched(true)
            }
        }, 0);
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
    }

    render() {
        let stateRandomArrayCopy = this.state.stateRandomArray.slice();
        let stateInjectedPicksCopy = this.state.statePicks.slice();
        return (
            <button className={(this.props.activatedDuck === this.props.id) ? this.props.buttonStyle : 'submit-btn'}
                disabled={this.props.activatedDuck !== this.props.id}
                onClick={(e) => {
                    this.findIntersection(stateRandomArrayCopy, stateInjectedPicksCopy)
                    this.findMatch(stateRandomArrayCopy, stateInjectedPicksCopy)
                    this.increamentDuck()
                }
                }>OK</button>
        )
    }
}

export default Check;