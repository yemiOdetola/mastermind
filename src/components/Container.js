import React from 'react';
import DecodeRow from './DecodeRow';
import { SidePegs } from './SidebarCover';

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showVal: false,
            toInjectColor: '',
            toInjectValue: '',
            paintedVal: '',
            paintedArray: [],
            injectedPicks: [],
            randomArr: []
        }
        this.updateInjection = this.updateInjection.bind(this);
        this.getInjected = this.getInjected.bind(this);
        this.getPicks = this.getPicks.bind(this);
        this.createRandomValues = this.createRandomValues.bind(this);
        this.findIntersection = this.findIntersection.bind(this);
        this.setRandomToState = this.setRandomToState.bind(this);
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
        return intersect;
    }
    
    getInjected(value) {
        this.setState(prevState => ({
            ...prevState,
            paintedArray: [...prevState.paintedArray, value]
         }))
    }

    getPicks(picks) {
        this.setState({
            injectedPicks: picks
        })
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
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
                        <DecodeRow 
                            injectedValue={this.state.toInjectValue} 
                            injectedColor={this.state.toInjectColor}
                            getinjected={this.getInjected}
                            retrievePicks={this.getPicks}/>
                            {/* <button className="btn btn-small btn-success" onClick={this.findIntersection([1, 2, 3, 5], [1, 3, 4, 2])}></button> */}
                        <p>Parent: color:{this.state.toInjectColor}, value: {this.state.toInjectValue}</p>
                        <SidePegs updatetoinject={this.updateInjection}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;