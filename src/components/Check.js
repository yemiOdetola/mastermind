import React from 'react'

class Check extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDuck: 1
        }
        this.increamentDuck = this.increamentDuck.bind(this);
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