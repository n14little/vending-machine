import React, { Component } from 'react';
import numeral from 'numeral';

function getCurrentBalance(currentBalance) {
  return currentBalance ? numeral(currentBalance).format('$0.00') : 'INSERT COIN';
}

class Payment extends Component {
  render() {
    const { dispatch } = this.props;
    const onClick = (dispatch, amount) => {
      dispatch({ type: 'INSERT_COIN', amount: amount})
    };
    return (
      <div>
        <p>{getCurrentBalance(this.props.currentBalance)}</p>
        <button id="nickel" type="button" onClick={onClick.bind(this, dispatch, 0.05)}>Nickel</button>
        <button id="dime" type="button" onClick={onClick.bind(this, dispatch, 0.1)}>Dime</button>
        <button id="quarter" type="button" onClick={onClick.bind(this, dispatch, 0.25)}>Quarter</button>
      </div>
    );
  }
}

export default Payment;
