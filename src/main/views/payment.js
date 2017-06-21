import React, { Component } from 'react';

function getCurrentBalance(currentBalance) {
  return currentBalance ? `$${currentBalance}` : 'INSERT COIN';
}

class Payment extends Component {
  render() {
    return (
      <div>
        <p>{getCurrentBalance(this.props.currentBalance)}</p>
        <button id="nickel" type="button">Nickel</button>
        <button id="dime" type="button">Dime</button>
        <button id="quarter" type="button">Quarter</button>
      </div>
    );
  }
}

export default Payment;
