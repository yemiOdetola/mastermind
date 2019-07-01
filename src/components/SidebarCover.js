import React from 'react';

// A single side-peg
export class EachSidePeg extends React.Component {
    constructor(props) {
        super(props)
        this.copyColorProperty = this.copyColorProperty.bind(this);
        this.state = {
            currentPegProperty: {
                copiedColor: '',
                copiedValue: ''
            }
        }
    }

    copyColorProperty() {
        let newObj = {
            copiedColor: this.props.indexcolor,
            copiedValue: this.props.indexvalue
        }
        this.setState(Object.assign(this.state.currentPegProperty, newObj));
        this.props.updateinjector(
            this.state.currentPegProperty.copiedValue,
            this.state.currentPegProperty.copiedColor
        );
    }
    render() {
        return (
            <div
                className={`emptyPeg color-pallete ${this.props.indexcolor}`}
                onClick={this.copyColorProperty}
                indexvalue={this.props.indexvalue}>
            </div>
        );
    }
}
export class SidePegs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pegsProperties: [
                { indexValue: 1, indexColor: 'color1' },
                { indexValue: 2, indexColor: 'color2' },
                { indexValue: 3, indexColor: 'color3' },
                { indexValue: 4, indexColor: 'color4' },
                { indexValue: 5, indexColor: 'color5' },
                { indexValue: 6, indexColor: 'color6' }
            ]
        }
    }

    render() {
        let pegData = this.state.pegsProperties;
        let sidePegsArray = [];
        // console.log(this.props);
        for (let i = 0; i < pegData.length; i++) {
            sidePegsArray.push(
                <EachSidePeg
                    key={i}
                    indexvalue={pegData[i].indexValue}
                    indexcolor={pegData[i].indexColor}
                    updateinjector={this.props.updatetoinject}
                />
            )
        }
        return (
            <div className="side-pegs">
                {sidePegsArray}
            </div>
        )
    }
}