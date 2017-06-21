import Payment from './views/payment';
import '../css/App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Payment />
      </div>
    );
  }
}

const getState = (state) => state;

export default connect(getState)(App);
