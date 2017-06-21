import React, { Component } from 'react';
import numeral from 'numeral';

function getCurrentBalance(currentBalance) {
  return currentBalance ? numeral(currentBalance).format('$0.00') : 'INSERT COIN';
}

class Payment extends Component {
  render() {
    const { dispatch } = this.props;
    const onNickelClick = (dispatch) => {
      dispatch({ type: 'INSERT_COIN', amount: 0.05})
    };
    return (
      <div>
        <p>{getCurrentBalance(this.props.currentBalance)}</p>
        <button id="nickel" type="button" onClick={onNickelClick.bind(this, dispatch)}>Nickel</button>
        <button id="dime" type="button">Dime</button>
        <button id="quarter" type="button">Quarter</button>
      </div>
    );
  }
}

export default Payment;
