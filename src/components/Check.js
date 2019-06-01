import React from 'react'

class Check extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDuck: 1
        }
        this.findIntersection = this.findIntersection.bind(this);
        this.increamentDuck = this.increamentDuck.bind(this);
    }

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

    increamentDuck() {
        this.setState({
            currentDuck: this.props.activatedDuck + 1
        })
        setTimeout(() => {
            this.props.getNextDuck(this.state.currentDuck)
        }, 10)
    }

    render() {
        console.log('randomArr', this.props.randomArr)
        console.log('injectedPicks', this.props.injectedPicks)
        return (
            <button className={(this.props.activatedDuck === this.props.id) ? this.props.buttonStyle : 'btn btn-small btn-default'}
                disabled={this.props.activatedDuck !== this.props.id}
                onClick={(e) => {
                    this.props.findIntersection(this.props.randomArr, this.props.injectedPicks)
                    this.increamentDuck()
                }
                }>Click</button>
        )
    }
}

export default Check;