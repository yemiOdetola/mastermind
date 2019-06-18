import React from 'react';


export class IndicatorGroup extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        let keyVal;
        let indicatorStyle = '';
        const indicators = [];
        let exactMatches = this.props.exactMatches;
        let valueMatches = this.props.valueMatches;
        let indId = this.props.indicatorId;
        console.log('indicatorId', this.props.indicatorId);
        let updateIndicators = (i) => {
            let indicatorId = this.props.indicatorId;
            keyVal = `indicate${i}`;
            indicatorStyle = 'indicator';
            if ((this.props.activatedDuck - 1) === (this.props.indicatorId)) {
                if (exactMatches > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches--;
                } else if (valueMatches > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches--;
                } else {
                    indicatorStyle = indicatorStyle + ' ooop'
                }
            }
            indicators.push(
                <Indicator
                    indicatorStyle={indicatorStyle}
                    key={keyVal}
                    keyVal={`indicator${keyVal}`}
                    indd={indId}
                />
            )
        }
        let times = (n) => {
            return (f) => {
                Array(n).fill().map((_, i) => f(i));
            };
        };
        times(4)(updateIndicators);
        return (
            <div className="indicator-group">
                {indicators}
            </div>
        )
    }
}


export class Indicator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        console.log('indd from in group', this.props.indd);
        return (
            <div
                className={this.props.indicatorStyle}
                ind={this.props.indd}
                key={this.props.keyVal}>
            </div>
        )
    }
}