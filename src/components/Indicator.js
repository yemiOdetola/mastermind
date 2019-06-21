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
        let indId = this.props.indicatorId;
        console.log('indicatorId', this.props.indicatorId);
        let updateIndicators = (i) => {
            keyVal = `indicate${i}`;
            indicatorStyle = 'indicator';
            let exactMatches = 0;
            let valueMatches = 0;
            if (this.props.activatedDuck === 1) {
                exactMatches = this.props.exactMatches;
                if (exactMatches > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches--;
                } else if (valueMatches > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches--;
                } else {
                    indicatorStyle = indicatorStyle + ''
                }
            }
            if (this.props.activatedDuck === 2) {
                exactMatches = this.props.exactMatches2;
                if (exactMatches > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches--;
                } else if (valueMatches > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches--;
                } else {
                    indicatorStyle = indicatorStyle + ''
                }
            }
            if (this.props.activatedDuck === 3) {
                exactMatches = this.props.exactMatches3;
                if (exactMatches > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches--;
                } else if (valueMatches > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches--;
                } else {
                    indicatorStyle = indicatorStyle + ''
                }
            }
            if (this.props.activatedDuck === 4) {
                exactMatches = this.props.exactMatches4;
                if (exactMatches > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches--;
                } else if (valueMatches > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches--;
                } else {
                    indicatorStyle = indicatorStyle + ''
                }
            }
            if (this.props.activatedDuck === 5) {
                exactMatches = this.props.exactMatches5;
                if (exactMatches > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches--;
                } else if (valueMatches > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches--;
                } else {
                    indicatorStyle = indicatorStyle + ''
                }
            }
            if (this.props.activatedDuck === 6) {
                exactMatches = this.props.exactMatches6;
                if (exactMatches > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches--;
                } else if (valueMatches > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches--;
                } else {
                    indicatorStyle = indicatorStyle + ''
                }
            }
            if (this.props.activatedDuck === 7) {
                exactMatches = this.props.exactMatches7;
                if (exactMatches > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches--;
                } else if (valueMatches > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches--;
                } else {
                    indicatorStyle = indicatorStyle + ''
                }
            }
            if (this.props.activatedDuck === 8) {
                exactMatches = this.props.exactMatches8;
                if (exactMatches > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches--;
                } else if (valueMatches > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches--;
                } else {
                    indicatorStyle = indicatorStyle + ''
                }
            }
            if (this.props.activatedDuck === 9) {
                exactMatches = this.props.exactMatches9;
                if (exactMatches > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches--;
                } else if (valueMatches > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches--;
                } else {
                    indicatorStyle = indicatorStyle + ''
                }
            }
            if (this.props.activatedDuck === 10) {
                exactMatches = this.props.exactMatches10;
                if (exactMatches > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches--;
                } else if (valueMatches > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches--;
                } else {
                    indicatorStyle = indicatorStyle + ''
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