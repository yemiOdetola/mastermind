import React from 'react';


class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            generatedMatches: [],
            showVal: false
        }
    }

    findMatch(a, b) {
        let foundMatches = [];
        for (let i = 0; i < a.length; i++) {
            for (let y = 0; y < b.length; y++) {
                if (a[i] === b[y]) {
                    foundMatches.push(a[i]);
                }
            }
        }
        return foundMatches;
    }

    findIntersection(a, b) {
        let intersect = [];
        while(a.length > 0 && b.length > 0) {
            // if(a[0] < b[0]) {
            //     a.shift()
            // } else if(a[0] > b[0]) {
            //     b.shift();
            // } else {
            //     intersect.push(a.shift())
            //     b.shift();
            // }


            for (let i = 0; i < a.length; i++) {
                for (let y = 0; y < b.length; y++) {
                    if(a[i] < b[y]) {
                        a.shift();
                    } else if(a[i] > b[y]) {
                        b.shift();
                        intersect.push('0');
                    } else {
                        intersect.push(a.shift());
                    }
                }
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
        let a = [8, 8, 8, 9]
        let b = [6, 7, 7, 4]
        console.log(this.findIntersection(a, b));
        // console.log(this.findMatch(b, a));
        // console.log(this.findMatch(generatedMatches, selectedColorValues));
    }

    render() {
        return (
            <div>this os a xjew</div>
        )
    }
}

export default Container;