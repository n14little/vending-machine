import React from 'react';
import numeral from 'numeral';

const PaymentProcessor = ({ purchase, currentBalance }) => {
  return (
    <div>
      <p>{purchase.value === currentBalance ? 'THANK YOU' : `PRICE: ${numeral(purchase.value).format('$0.00')}`}</p>
    </div>
  );
};

export default PaymentProcessor;
