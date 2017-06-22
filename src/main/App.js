import Payment from './views/payment';
import '../css/App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    const { currentBalance, dispatch } = this.props;
    return (
      <div className="App">
        <Payment currentBalance={currentBalance} dispatch={dispatch}/>
      </div>
    );
  }
}

const getState = (state) => state;

export default connect(getState)(App);
