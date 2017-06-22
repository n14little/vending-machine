import actions from '../constants/actions';

import React from 'react';
import numeral from 'numeral';

const colaValue = 1.00;
const chipsValue = 0.50;
const candyValue = 0.65;
const items = {
  cola: { name: 'Cola', value: colaValue },
  chips: { name: 'Chips', value: chipsValue },
  candy: { name: 'Candy', value: candyValue }
};

const clickHandler = (dispatch, item) => {
  dispatch({
    type: actions.PURCHASE,
    item: item
  });
};

const Products = (props) => {
  const  { dispatch } = props;
  const colaText = `Cola - ${numeral(colaValue).format('$0.00')}`;
  const chipsText = `Chips - ${numeral(chipsValue).format('$0.00')}`;
  const candyText = `Candy - ${numeral(candyValue).format('$0.00')}`;

  return (
    <div>
      <button id="cola" type="button" onClick={clickHandler.bind(this, dispatch, items.cola)}>{colaText}</button>
      <button id="chips" type="button" onClick={clickHandler.bind(this, dispatch, items.chips)}>{chipsText}</button>
      <button id="candy" type="button" onClick={clickHandler.bind(this, dispatch, items.candy)}>{candyText}</button>
    </div>
  );
};

export default Products;
