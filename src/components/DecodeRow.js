import React from 'react';
import Peg from './Peg';

let picks = [0, 0, 0, 0]

class DecodeRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            statePicks: [],
            initialPegArray: [1, 2, 3, 4],
            newPegArray: [],
            clear: false,
            injectedVal: ''
        }
        this.getInjected = this.getInjected.bind(this);
        this.holdInjected1 = this.holdInjected1.bind(this);
        this.holdInjected2 = this.holdInjected2.bind(this);
        this.holdInjected3 = this.holdInjected3.bind(this);
        this.holdInjected4 = this.holdInjected4.bind(this);
    }

    holdInjected1(injected1) {
        picks[0] = injected1;
        this.setState({
            statePicks: picks
        })
        this.props.retrievePicks(this.state.statePicks);
    }
    holdInjected2(injected2) {
        picks[1] = injected2;
        this.setState({
            statePicks: picks
        })
        this.props.retrievePicks(this.state.statePicks);
    }
    holdInjected3(injected3) {
        picks[2] = injected3;
        this.setState({
            statePicks: picks
        })
        this.props.retrievePicks(this.state.statePicks);
    }
    holdInjected4(injected4) {
        picks[3] = injected4;
        this.setState({
            statePicks: picks
        })
        this.props.retrievePicks(this.state.statePicks);
    }
    getInjected(idInjected) {
        this.setState({
            injectedVal: idInjected,
        })
    }

    render() {
        let pegsArr = this.state.initialPegArray.slice();
        let pegsColumn = [];
        for (let index = 0; index < pegsArr.length; index++) {
            pegsColumn.push(<Peg
                key={index}
                pegId={pegsArr[index]}
                getinjected={this.getInjected}
                injectedValue={this.props.injectedValue}
                injectedColor={this.props.injectedColor} 
                handle1={this.holdInjected1}
                handle2={this.holdInjected2}
                handle3={this.holdInjected3}
                handle4={this.holdInjected4}/>);
        }
        return (
            <div>
                <p>Value: {this.state.injectedVal}</p>
                {pegsColumn}
            </div>
        )
    }
}

export default DecodeRow;


// {this.state.initialPegArray.map(pegItem => {
//     return <Peg
//         key={pegItem}
//         getinjected={this.getInjected}
//         injectedValue={this.props.injectedValue}
//         injectedColor={this.props.injectedColor}
//     />
// })}