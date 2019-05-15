import React from 'react';
import DecodeRow from './DecodeRow';
import { SidePegs } from './SidebarCover';

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            generatedMatches: [],
            showVal: false,
            toInjectColor: '',
            toInjectValue: ''
        }
        this.updateInjection = this.updateInjection.bind(this);
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

    componentWillMount() {
        let randomizer = this.props.randomizer();
        randomizer.map(i => {
            return this.state.generatedMatches.push(i);
        })
        // let selectedColorValues = this.props.selectedColorValues;
        // let generatedMatches = this.state.generatedMatches;
        // console.log(selectedColorValues);
        // console.log(generatedMatches);
        let a = [8, 8, 8, 8];
        let b = [6, 8, 7, 8];
        this.findIntersection(a, b);
        // console.log(this.findIntersection(a, b));
        // console.log(this.findMatch(b, a));
        // console.log(this.findMatch(selectedColorValues, generatedMatches));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
                        <DecodeRow injectedValue={this.state.toInjectValue} injectedColor={this.state.toInjectColor}/>
                        <p>Parent: color:{this.state.toInjectColor}, value: {this.state.toInjectValue}</p>
                        <SidePegs updatetoinject={this.updateInjection}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;