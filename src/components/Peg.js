import React from 'react';
import '../css/Peg.css';

class Peg extends React.Component {
    constructor(props) {
        super(props)
        this.injectCopied = this.injectCopied.bind(this);
        this.state = {
            styleInject: 'emptyPeg',
            idInject: 0,
            myPegId: '',
            injector: [0, 0, 0, 0],
            injected1: 0,
            injected2: 0,
            injected3: 0,
            injected4: 0
        }
        this.updateVal = this.updateVal.bind(this);
    }

    injectCopied() {
        this.setState({
            styleInject: this.props.injectedColor,
            idInject: this.props.injectedValue
        })
        setTimeout(() => {
            
            if (this.props.pegId === 1) {
                this.setState({
                    injected1: this.state.idInject
                })
                setTimeout(() => {
                    this.props.handle1(this.state.injected1);
                }, 20);
                console.log('updates!! injected1', this.state.injected1)
            }
            if (this.props.pegId === 2) {
                this.setState({
                    injected2: this.state.idInject
                })
                setTimeout(() => {
                    this.props.handle2(this.state.injected2);
                }, 20);
                console.log('updates!! injected2', this.state.injected2)
            }
            if (this.props.pegId === 3) {
                this.setState({
                    injected3: this.state.idInject
                })
                setTimeout(() => {
                    this.props.handle3(this.state.injected3);
                }, 20);
                console.log('updates!! injected3', this.state.injected3)
            }
            if (this.props.pegId === 4) {
                this.setState({
                    injected4: this.state.idInject
                })
                setTimeout(() => {
                    this.props.handle4(this.state.injected4);
                }, 20);
                console.log('updates!! injected4', this.state.injected4)
            }
        }, 100);

        setTimeout(() => {
            this.updateVal();
        }, 100);
        // Had to wait a lil bit for the state to grab the prop value
    }

    updateVal() {
        this.props.getinjected(this.state.idInject);
    }

    render() {
        let defaultPegStyle = 'emptyPeg';
        if (this.props.setEditable === false) {
            defaultPegStyle += ` notEditable`;
        }
        return (
            <div
                className={`${defaultPegStyle} ${this.state.styleInject}`}
                onClick={this.props.setEditable ? this.injectCopied : undefined}
                pegid={this.props.pegId}> 
            </div>
        )
    }
}

export default Peg;