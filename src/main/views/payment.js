import React, { Component } from 'react';
import numeral from 'numeral';

function getCurrentBalance(currentBalance) {
  return currentBalance ? numeral(currentBalance).format('$0.00') : 'INSERT COIN';
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
