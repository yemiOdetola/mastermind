import React from 'react';
import DecodeRow from './DecodeRow';
import { SidePegs } from './SidebarCover';
import Check from './Check';
import { Indicators } from './Indicator';

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showVal: false,
            toInjectColor: '',
            toInjectValue: '',
            paintedVal: '',
            paintedArray: [],
            injectedPicks: [0, 0, 0, 0],
            randomArr: [],
            isEditable: false,
            activatedDuck: 1,
            buttonStyle: 'btn btn-small'
        }
        this.updateInjection = this.updateInjection.bind(this);
        this.getInjected = this.getInjected.bind(this);
        this.getPicks = this.getPicks.bind(this);
        this.createRandomValues = this.createRandomValues.bind(this);
        this.findIntersection = this.findIntersection.bind(this);
        this.setRandomToState = this.setRandomToState.bind(this);
        this.getNextDuck = this.getNextDuck.bind(this);
    }

    updateInjection(value, color) {
        this.setState({
            toInjectColor: color,
            toInjectValue: value
        })
    }

    // findMatch(a, b) {
    //     let foundMatches = [];
    //     let distinctValues;
    //     for (let i = 0; i < a.length; i++) {
    //         for (let y = 0; y < b.length; y++) {
    //             if (a[i] === b[y]) {
    //                 foundMatches.push(a[i]);
    //                 distinctValues = [...new Set(foundMatches)]
    //             }
    //         }
    //     }
    //     return distinctValues;
    // }

    findIntersection(a, b) {
        let intersect = [];
        for (var i = 0; i < Math.min(a.length, b.length); i++) {
            if (a[i] === b[i]) {
                intersect[i] = a[i];
            } else {
                intersect[i] = 0;
            }
        }
        console.log(intersect);
        return intersect;
    }

    getInjected(value) {
        this.setState(prevState => ({
            ...prevState,
            paintedArray: [...prevState.paintedArray, value]
        }))
    }

    getNextDuck(duckId) {
        this.setState({
            activatedDuck: duckId
        })
    }

    getPicks(picks) {
        this.setState({
            injectedPicks: picks
        })
        let pickedCol = this.state.injectedPicks;
        for (let val = 0; val < pickedCol.length; val++) {
            if (pickedCol[val] === 0) {
                this.setState({
                    buttonStyle: 'btn btn-small btn-disabled'
                })
            } else {
                this.setState({
                    buttonStyle: 'btn btn-small btn-success'
                })
            }
        }
    }

    setRandomToState() {
        let randomValues = this.createRandomValues();
        this.setState({
            randomArr: randomValues
        })
    }

    createRandomValues = (length = 4, max = 5) => {
        return Array.apply(null, Array(length)).map(function () {
            let randomizedValues = Math.round(Math.random() * max);
            return randomizedValues;
        });
    }

    componentWillMount() {
        this.setRandomToState();
    }

    componentDidMount() {
        console.log('state array', this.state.randomArr);
    }

    render() {
        console.log('injected picks Container', this.state.injectedPicks);
        let duckRow = [];
        for (let i = 0; i < 10; i++) {
            duckRow.push(
                <div className="pegs-duck" key={`row${i}`}>
                    <div className="pegRow">
                    <DecodeRow
                        key={i}
                        injectedValue={this.state.toInjectValue}
                        injectedColor={this.state.toInjectColor}
                        getinjected={this.getInjected}
                        retrievePicks={this.getPicks}
                        duckId={i + 1}
                        activatedDuck={this.state.activatedDuck}
                    />
                    </div>
                    <div className={(this.state.activatedDuck === (i + 1)) ? 'hide' : 'indicators'}>
                    <Indicators />
                    </div>
                    <div className={(this.state.activatedDuck === (i + 1)) ? 'checkbtn'  : 'hide'}>
                        <Check
                        key={`btn${i}`}
                        id={i + 1}
                        randomArr={this.state.randomArr}
                        injectedPicks={this.state.injectedPicks}
                        increamentDuck={this.increamemntDuck}
                        findIntersection={this.findIntersection}
                        buttonStyle={this.state.buttonStyle}
                        getNextDuck={this.getNextDuck}
                        activatedDuck={this.state.activatedDuck}
                    />
                    </div>
                </div>
            )
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
                        {duckRow}
                        <p>Parent: color:{this.state.toInjectColor}, value: {this.state.toInjectValue}</p>

                        <SidePegs updatetoinject={this.updateInjection} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;