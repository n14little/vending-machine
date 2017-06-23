import actions from '../constants/actions';

import React from 'react';
import numeral from 'numeral';

function clickHandler(purchase, currentBalance, dispatch) {
  purchase.value === currentBalance ?
    dispatch({ type: actions.SUCCESSFUL_PURCHASE }) :
    dispatch({ type: actions.NOT_ENOUGH_MONEY });
}

const PaymentProcessor = ({ purchase, currentBalance, dispatch }) => {
  return (
    <div>
      <p>{purchase.value === currentBalance ? 'THANK YOU' : `PRICE: ${numeral(purchase.value).format('$0.00')}`}</p>
      <button type="button" onClick={clickHandler.bind(this, purchase, currentBalance, dispatch)}>OK</button>
    </div>
  );
};

export default PaymentProcessor;
