import actions from '../constants/actions';

import React from 'react';
import numeral from 'numeral';

function clickHandler(dispatch) {
  dispatch({
    type: actions.SUCCESSFUL_PURCHASE,
  });
}

const PaymentProcessor = ({ purchase, currentBalance, dispatch }) => {
  return (
    <div>
      <p>{purchase.value === currentBalance ? 'THANK YOU' : `PRICE: ${numeral(purchase.value).format('$0.00')}`}</p>
      <button type="button" onClick={clickHandler.bind(this, dispatch)}>OK</button>
    </div>
  );
};

export default PaymentProcessor;
