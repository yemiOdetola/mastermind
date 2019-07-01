import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from '../src/components/Container';
import Explore from '../src/components/Explore';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={Explore} />
          <Route path="/mastermind" component={Container} />
        </Router>
        {/* <Container /> */}
      </div>
    );
  }
}

export default App;
