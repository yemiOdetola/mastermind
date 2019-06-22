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
        let exactMatches = this.props.exactMatches;
        let valueMatches = this.props.valueMatches;
        let exactMatches2 = this.props.exactMatches2;
        let valueMatches2 = this.props.valueMatches2;
        let exactMatches3= this.props.exactMatches3;
        let valueMatches3= this.props.valueMatches3;
        let exactMatches4= this.props.exactMatches4;
        let valueMatches4= this.props.valueMatches4;
        let exactMatches5= this.props.exactMatches5;
        let valueMatches5= this.props.valueMatches5;
        let exactMatches6= this.props.exactMatches6;
        let valueMatches6= this.props.valueMatches6;
        let exactMatches7= this.props.exactMatches7;
        let valueMatches7= this.props.valueMatches7;
        let exactMatches8= this.props.exactMatches8;
        let valueMatches8= this.props.valueMatches8;
        let exactMatches9= this.props.exactMatches9;
        let valueMatches9= this.props.valueMatches9;
        let exactMatches10= this.props.exactMatches10;
        let valueMatches10= this.props.valueMatches10;
        console.log(exactMatches);
        let updateIndicators = (i) => {
            keyVal = `ndctr${i}`;
            indicatorStyle = 'indicator';
            if (this.props.indicatorId === 1) {
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
            if (this.props.indicatorId === 2) {
                if (exactMatches2 > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches2--;
                } else if (valueMatches2 > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches2--;
                } else {
                    indicatorStyle = indicatorStyle + ''
                }
            }
            if (this.props.indicatorId === 3) {
                if (exactMatches3 > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches3--;
                } else if (valueMatches3 > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches3--;
                } else {
                    indicatorStyle = indicatorStyle + ''
                }
            }
            if (this.props.indicatorId === 4) {
                if (exactMatches4 > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches4--;
                } else if (valueMatches4 > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches4--;
                } else {
                    indicatorStyle = indicatorStyle + ''
                }
            }
            if (this.props.indicatorId === 5) {
                if (exactMatches5 > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches5--;
                } else if (valueMatches5 > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches5--;
                } else {
                    indicatorStyle = indicatorStyle + ''
                }
            }
            if (this.props.indicatorId === 6) {
                if (exactMatches6 > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches6--;
                } else if (valueMatches6 > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches6--;
                } else {
                    indicatorStyle = indicatorStyle + ''
                }
            }
            if (this.props.indicatorId === 7) {
                if (exactMatches7 > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches7--;
                } else if (valueMatches7 > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches7--;
                } else {
                    indicatorStyle = indicatorStyle + ''
                }
            }
            if (this.props.indicatorId === 8) {
                if (exactMatches8 > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches8--;
                } else if (valueMatches8 > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches8--;
                } else {
                    indicatorStyle = indicatorStyle + ''
                }
            }
            if (this.props.indicatorId === 9) {
                if (exactMatches9 > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches9--;
                } else if (valueMatches9 > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches9--;
                } else {
                    indicatorStyle = indicatorStyle + ''
                }
            }
            if (this.props.indicatorId === 10) {
                if (exactMatches10 > 0) {
                    indicatorStyle = indicatorStyle + ' exact';
                    exactMatches10--;
                } else if (valueMatches10 > 0) {
                    indicatorStyle = indicatorStyle + ' value';
                    valueMatches10--;
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
            <div className="indicators">
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