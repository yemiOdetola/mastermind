import React, { Component } from 'react';
import Container from '../src/components/Container';
// import logo from './logo.svg';
import './css/App.css';
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
      <Container randomizer={this.randomArray} selectedColorValues={this.state.selectedColorValues} />
    );
  }
}

export default App;
