import React, { Component } from 'react';

class Payment extends Component {
  render() {
    return (
      <div>
        <button id="nickel" type="button">Nickel</button>
        <button id="dime" type="button">Dime</button>
        <button id="quarter" type="button">Quarter</button>
      </div>
    );
  }
}

export default Payment;
