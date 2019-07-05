import React from 'react';
import DecodeRow from './DecodeRow';
import { SidePegs } from './SidebarCover';
import Check from './Check';
import { IndicatorGroup } from './Indicator';
import { GameStatus } from './GameStatus';
import '../css/Peg.css';

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gameWon: false,
            gameLost: false,
            unmatched: false,
            toInjectColor: '',
            toInjectValue: '',
            paintedVal: '',
            paintedArray: [],
            injectedPicks: [0, 0, 0, 0],
            randomArr: [],
            isEditable: false,
            activatedDuck: 1,
            indicatedId: 1,
            buttonStyle: 'submit-btn',
            exactMatches: 0,
            valueMatches: 0,
            exactMatches2: 0,
            valueMatches2: 0,
            exactMatches3: 0,
            valueMatches3: 0,
            exactMatches4: 0,
            valueMatches4: 0,
            exactMatches5: 0,
            valueMatches5: 0,
            exactMatches6: 0,
            valueMatches6: 0,
            exactMatches7: 0,
            valueMatches7: 0,
            exactMatches8: 0,
            valueMatches8: 0,
            exactMatches9: 0,
            valueMatches9: 0,
            exactMatches10: 0,
            valueMatches10: 0,
            exactMatches11: 0,
            valueMatches11: 0,
            exactMatches12: 0,
            valueMatches12: 0
        }
        this.updateInjection = this.updateInjection.bind(this);
        this.getInjected = this.getInjected.bind(this);
        this.getPicks = this.getPicks.bind(this);
        this.createRandomValues = this.createRandomValues.bind(this);
        this.setRandomToState = this.setRandomToState.bind(this);
        this.getNextDuck = this.getNextDuck.bind(this);
    }

    updateInjection(value, color) {
        this.setState({
            toInjectColor: color,
            toInjectValue: value
        })
    }
    updateGameWon = (update) => {
        this.setState({
            gameWon: update,
            gameLost: false
        })
    }

    updateGamelost = (update) => {
        this.setState({
            gameLost: update,
            gameWon: false
        })
    }

    getInjected(value) {
        this.setState(prevState => ({
            ...prevState,
            paintedArray: [...prevState.paintedArray, value]
        }))
    }

    getNextDuck(duckId, indiId) {
        this.setState({
            activatedDuck: duckId,
            indicatedId: indiId

        })
    }
    resetPicks = (ooPicks) => {
        this.setState({
            injectedPicks: ooPicks
        })
    }
    getPicks(picks) {
        this.setState({
            injectedPicks: picks
        })
        let pickedCol = this.state.injectedPicks;
        for (let val = 0; val < pickedCol.length; val++) {
            if (pickedCol[val] === 0 || pickedCol[val] === '') {
                this.setState({
                    buttonStyle: 'submit-btn null-found'
                })
            } else {
                this.setState({
                    buttonStyle: 'submit-btn'
                })
            }
        }
    }
    setRandomToState() {
        let randomValues = this.createRandomValues();
        this.setState({
            randomArr: randomValues
        })
    }
    notMatched = (update) => {
        this.setState({
            unmatched: update
        })
    }

    restartGame = () => {
        window.location.reload();
    }

    // Can't seem to find a way to make my exact and value matches in the indicator component distinct...They keep overriding each other..
    // This isn't suppose to be, but...it is what it is...basics, its manually done from 84 - 183
    // shit went aheadto affect other components, need to write all *sobs*... It is what it is... refactor soon.
    // .Would appreciate a hint from you if I haven't figured it out.
    getExactMatches = (exact) => {
        this.setState({
            exactMatches: exact
        })
    }
    getExactMatches2 = (exact2) => {
        this.setState({
            exactMatches2: exact2
        })
    }
    getExactMatches3 = (exact3) => {
        this.setState({
            exactMatches3: exact3
        })
    }
    getExactMatches4 = (exact4) => {
        this.setState({
            exactMatches4: exact4
        })
    }
    getExactMatches5 = (exact5) => {
        this.setState({
            exactMatches5: exact5
        })
    }
    getExactMatches6 = (exact6) => {
        this.setState({
            exactMatches6: exact6
        })
    }
    getExactMatches7 = (exact7) => {
        this.setState({
            exactMatches7: exact7
        })
    }
    getExactMatches8 = (exact8) => {
        this.setState({
            exactMatches8: exact8
        })
    }
    getExactMatches9 = (exact9) => {
        this.setState({
            exactMatches9: exact9
        })
    }
    getExactMatches10 = (exact10) => {
        this.setState({
            exactMatches10: exact10
        })
    }
    getExactMatches11 = (exact11) => {
        this.setState({
            exactMatches11: exact11
        })
    }
    getExactMatches12 = (exact12) => {
        this.setState({
            exactMatches12: exact12
        })
    }
    getValueMatches = (value) => {
        this.setState({
            valueMatches: value
        })
    }
    getValueMatches2 = (value2) => {
        this.setState({
            valueMatches2: value2
        })
    }
    getValueMatches3 = (value3) => {
        this.setState({
            valueMatches3: value3
        })
    }
    getValueMatches4 = (value4) => {
        this.setState({
            valueMatches4: value4
        })
    }
    getValueMatches5 = (value5) => {
        this.setState({
            valueMatches5: value5
        })
    }
    getValueMatches6 = (value6) => {
        this.setState({
            valueMatches6: value6
        })
    }
    getValueMatches7 = (value7) => {
        this.setState({
            valueMatches7: value7
        })
    }
    getValueMatches8 = (value8) => {
        this.setState({
            valueMatches8: value8
        })
    }
    getValueMatches9 = (value9) => {
        this.setState({
            valueMatches9: value9
        })
    }
    getValueMatches10 = (value10) => {
        this.setState({
            valueMatches10: value10
        })
    }
    getValueMatches11 = (value11) => {
        this.setState({
            valueMatches11: value11
        })
    }
    getValueMatches12 = (value12) => {
        this.setState({
            valueMatches12: value12
        })
    }
    createRandomValues = (length = 4, max = 5) => {
        return Array.apply(null, Array(length)).map(function () {
            let randomizedValues = Math.round((Math.random() * max) + 1);
            return randomizedValues;
        });
    }

    componentWillMount() {
        this.setRandomToState();
    }

    render() {
        let duckRow = [];
        for (let i = 0; i < 10; i++) {
            duckRow.push(
                <div className="pegs-duck" key={`chance${i}`}>
                    <div className={(this.state.unmatched
                        && (this.state.activatedDuck !== (i + 1))
                        && ((i + 1) < this.state.activatedDuck))
                        ? "pegRow shake" : "pegRow"}>
                        <DecodeRow
                            key={i}
                            injectedValue={this.state.toInjectValue}
                            injectedColor={this.state.toInjectColor}
                            getinjected={this.getInjected}
                            retrievePicks={this.getPicks}
                            duckId={i + 1}
                            activatedDuck={this.state.activatedDuck}
                        />
                    </div>
                    <div className={(this.state.activatedDuck !== (i + 1)) ? 'indicatorGroup' : 'hide'}>
                        <IndicatorGroup
                            indicatorId={i + 1}
                            key={`indicator${i}`}
                            activatedDuck={this.state.activatedDuck}
                            exactMatches={this.state.exactMatches}
                            valueMatches={this.state.valueMatches}
                            exactMatches2={this.state.exactMatches2}
                            valueMatches2={this.state.valueMatches2}
                            exactMatches3={this.state.exactMatches3}
                            valueMatches3={this.state.valueMatches3}
                            exactMatches4={this.state.exactMatches4}
                            valueMatches4={this.state.valueMatches4}
                            exactMatches5={this.state.exactMatches5}
                            valueMatches5={this.state.valueMatches5}
                            exactMatches6={this.state.exactMatches6}
                            valueMatches6={this.state.valueMatches6}
                            exactMatches7={this.state.exactMatches7}
                            valueMatches7={this.state.valueMatches7}
                            exactMatches8={this.state.exactMatches8}
                            valueMatches8={this.state.valueMatches8}
                            exactMatches9={this.state.exactMatches9}
                            valueMatches9={this.state.valueMatches9}
                            exactMatches10={this.state.exactMatches10}
                            valueMatches10={this.state.valueMatches10}
                            exactMatches11={this.state.exactMatches11}
                            valueMatches11={this.state.valueMatches11}
                            exactMatches12={this.state.exactMatches12}
                            valueMatches12={this.state.valueMatches12}
                        />
                    </div>
                    <div className={(this.state.activatedDuck === (i + 1)) ? 'checkbtn' : 'hide'}>
                        <Check
                            key={`btn${i}`}
                            id={i + 1}
                            valueMatches={this.state.valueMatches}
                            updateGameWon={this.updateGameWon}
                            updateGamelost={this.updateGamelost}
                            notMatched={this.notMatched}
                            resetPicks={this.resetPicks}
                            getValueMatches={this.getValueMatches}
                            getExactMatches={this.getExactMatches}
                            getExactMatches2={this.getExactMatches2}
                            getValueMatches2={this.getValueMatches2}
                            getExactMatches3={this.getExactMatches3}
                            getValueMatches3={this.getValueMatches3}
                            getExactMatches4={this.getExactMatches4}
                            getValueMatches4={this.getValueMatches4}
                            getExactMatches5={this.getExactMatches5}
                            getValueMatches5={this.getValueMatches5}
                            getExactMatches6={this.getExactMatches6}
                            getValueMatches6={this.getValueMatches6}
                            getExactMatches7={this.getExactMatches7}
                            getValueMatches7={this.getValueMatches7}
                            getExactMatches8={this.getExactMatches8}
                            getValueMatches8={this.getValueMatches8}
                            getExactMatches9={this.getExactMatches9}
                            getValueMatches9={this.getValueMatches9}
                            getExactMatches10={this.getExactMatches10}
                            getValueMatches10={this.getValueMatches10}
                            getExactMatches11={this.getExactMatches11}
                            getValueMatches11={this.getValueMatches11}
                            getExactMatches12={this.getExactMatches12}
                            getValueMatches12={this.getValueMatches12}
                            exactMatches={this.state.exactMatches}
                            exactMatches2={this.state.exactMatches2}
                            exactMatches3={this.state.exactMatches3}
                            exactMatches4={this.state.exactMatches4}
                            exactMatches5={this.state.exactMatches5}
                            exactMatches6={this.state.exactMatches6}
                            exactMatches7={this.state.exactMatches7}
                            exactMatches8={this.state.exactMatches8}
                            exactMatches9={this.state.exactMatches9}
                            exactMatches10={this.state.exactMatches10}
                            exactMatches11={this.state.exactMatches11}
                            exactMatches12={this.state.exactMatches12}
                            randomArr={this.state.randomArr}
                            injectedPicks={this.state.injectedPicks}
                            increamentDuck={this.increamentDuck}
                            buttonStyle={this.state.buttonStyle}
                            getNextDuck={this.getNextDuck}
                            activatedDuck={this.state.activatedDuck}
                        />
                    </div>
                </div>
            )
        }
        return (
            <div className="container-fluid">
                <div className="name">
                    <div className="name game">
                        <a href="/" rel="noopener noreferrer">Mastermind</a>
                    </div>
                </div>
                <div className="row">
                    <div className="hide-xs col-md-3 col-lg-3 col-xl-4">
                    </div>
                    <div className="col-xs-12 col-sm-10 col-md-6 col-lg-5 col-xl-4 p-0">
                        <div className="duck-row">
                            {duckRow}
                        </div>
                    </div>
                    <div className={(this.state.gameWon || this.state.gameLost) ? "game-status" : 'hide'}>
                        <GameStatus
                            activatedDuck={this.state.activatedDuck}
                            gameWon={this.state.gameWon}
                            gameLost={this.state.gameLost}
                            restartGame={this.restartGame}
                        />
                    </div>
                    <div className="mr-auto col-md-1">
                        <div className="md-sidepegs">
                            <SidePegs updatetoinject={this.updateInjection} />
                        </div>
                    </div>
                    <div className="sm-sidepegs">
                        <SidePegs updatetoinject={this.updateInjection} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;