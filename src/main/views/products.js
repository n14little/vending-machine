import React from 'react';

const Products = (props) => {
  const  { dispatch } = props;
  return (
    <div>
      <button id="cola" type="button" onClick={() => dispatch({ type: 'PURCHASE', item: { name: 'Cola', value: 1.00}})}>Cola - $1.00</button>
      <button id="chips" type="button" onClick={() => dispatch({ type: 'PURCHASE', item: { name: 'Chips', value: 0.50}})}>Chips - $0.50</button>
      <button id="candy" type="button" onClick={() => dispatch({ type: 'PURCHASE', item: { name: 'Candy', value: 0.65}})}>Candy - $0.65</button>
    </div>
  );
}

export default Products;
