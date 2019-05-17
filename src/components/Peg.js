import React from 'react';
import '../css/Peg.css';

class Peg extends React.Component {
    constructor(props) {
        super(props)
        this.injectCopied = this.injectCopied.bind(this);
        this.state = {
            styleInject: 'emptyPeg',
            idInject: 0
        }
    }

    injectCopied() {
        this.setState({
            styleInject: this.props.injectedColor,
            idInject: this.props.injectedValue
        })
    }

    render() {
        console.log(this.props);
        return (
            <div
                className={`emptyPeg ${this.state.styleInject}`}
                onClick={this.injectCopied}
                pegid={this.state.idInject}>
            </div>
        )
    }
}

export default Peg;