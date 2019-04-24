import React, { Component } from 'react';
import Container from '../src/components/Container';
import logo from './logo.svg';
import './scss/App.css';
class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedColorValues: [1, 2, 3, 4]
    }
  }

  componentDidMount() {
    // console.log(this.randomArray());
  }

  randomArray = (length = 4, max = 5) => {
    return Array.apply(null, Array(length)).map(function () {
      let randomizedValues = Math.round(Math.random() * max);
      return randomizedValues;
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">Learn React</a>
        </header>
        <Container randomizer={this.randomArray} selectedColorValues={this.state.selectedColorValues}/>
      </div>
    );
  }
}

export default App;
