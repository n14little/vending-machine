import actions from '../constants/actions';

import React from 'react';
import numeral from 'numeral';

const nickel = 0.05;
const dime = 0.1;
const quarter = 0.25;

const getCurrentBalance = (currentBalance) => {
  return currentBalance ? numeral(currentBalance).format('$0.00') : 'INSERT COIN';
};

const onClick = (dispatch, amount) => {
  dispatch({ type: actions.INSERT_COIN, amount: amount})
};

const CoinMachine = (props) => {
  const { dispatch } = props;
  return (
    <div>
      <p>{getCurrentBalance(props.currentBalance)}</p>
      <button id="nickel" type="button" onClick={onClick.bind(this, dispatch, nickel)}>Nickel</button>
      <button id="dime" type="button" onClick={onClick.bind(this, dispatch, dime)}>Dime</button>
      <button id="quarter" type="button" onClick={onClick.bind(this, dispatch, quarter)}>Quarter</button>
    </div>
  );
};

export default CoinMachine;
