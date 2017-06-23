import CoinMachine from './views/coin-machine';
import Products from './views/products';
import PaymentProcessor from './views/payment-processor';
import '../css/App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

function getPaymentProcessor(purchase, currentBalance) {
  if (purchase) {
    return (<PaymentProcessor purchase={purchase} currentBalance={currentBalance} />);
  }
}

export class App extends Component {
  render() {
    const { currentBalance, dispatch, purchase } = this.props;
    return (
      <div className="App">
        <Products dispatch={dispatch}/>
        <CoinMachine currentBalance={currentBalance} dispatch={dispatch}/>
        {getPaymentProcessor(purchase, currentBalance)}
      </div>
    );
  }
};

const getState = (state) => state;

export default connect(getState)(App);
