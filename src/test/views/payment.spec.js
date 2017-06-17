import React from 'react';
import { shallow } from 'enzyme';
import Payment from '../../main/views/payment';

test('should have a nickel, dime and quarter button so that the user can give the machine that amount of money', () => {
  const payment = shallow(<Payment />);
  const dime = <button type="button">Dime</button>;
  const nickel = <button type="button">Nickel</button>;
  const quarter = <button type="button">Quarter</button>;

  expect(payment.contains(nickel)).toEqual(true);
  expect(payment.contains(dime)).toEqual(true);
  expect(payment.contains(quarter)).toEqual(true);
});
