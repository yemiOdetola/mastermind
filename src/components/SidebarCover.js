import React from 'react';

// A single side-peg
// export class EachSidePeg extends React.Component {

const EachSidePeg = (props) => {
    console.log(props);
    return (
        <div className={`emptyPeg ${props.indexcolor}`} indexvalue={props.indexvalue}></div>
    );
}
// }

// The side-peg group
export class SidePegs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPegProperty: 0,
            pegsProperties: [
                { indexValue: 0, indexColor: 'color0' },
                { indexValue: 1, indexColor: 'color1' },
                { indexValue: 2, indexColor: 'color2' },
                { indexValue: 3, indexColor: 'color3' },
                { indexValue: 4, indexColor: 'color4' },
                { indexValue: 5, indexColor: 'color5' },
            ]
        }
    }


    render() {
        let pegData = this.state.pegsProperties;
        let sidePegsArray = [];
        for (let i = 0; i < pegData.length; i++) {
            sidePegsArray.push(
                <EachSidePeg key={i} indexvalue={pegData[i].indexValue} indexcolor={pegData[i].indexColor} />
            )
        }
        return (
            <div>
                {sidePegsArray}
            </div>
        )
    }
}