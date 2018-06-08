import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default connect()(App);
