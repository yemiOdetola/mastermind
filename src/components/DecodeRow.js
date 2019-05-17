import React from 'react';
import Peg from './Peg';

class DecodeRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            picks: [],
            clear: false,
        }
    }

    render() {
        let pegsArr = ['one', 'two', 'three', 'four'];
        let pegsColumn = [];
        for ( let index = 0; index < pegsArr.length; index++ ) {
           pegsColumn.push(<Peg 
            key={index} 
            pegId={pegsArr[index]} 
            injectedValue={this.props.injectedValue}
            injectedColor={this.props.injectedColor} />);
        }
        return (
            <div>
                {pegsColumn}
            </div>
        )
    }
}

export default DecodeRow;


// this component is for my normal 4 items to decode for user