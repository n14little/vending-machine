import Payment from '../../main/views/payment';

import React from 'react';
import { shallow } from 'enzyme';

test('should have 3 buttons', () => {
  const payment = shallow(<Payment />);
  expect(payment.find('button[type="button"]')).toHaveLength(3);
});

test('should have a nickel', () => {
  const payment = shallow(<Payment />);
  const nickel = payment.find('#nickel');

  expect(nickel).toHaveLength(1);
  expect(nickel.text()).toBe('Nickel');
});

test('should have a dime', () => {
  const payment = shallow(<Payment />);
  const dime = payment.find('#dime');

  expect(dime).toHaveLength(1);
  expect(dime.text()).toBe('Dime');
});

test('should have a quarter', () => {
  const payment = shallow(<Payment />);
  const quarter = payment.find('#quarter');

  expect(quarter).toHaveLength(1);
  expect(quarter.text()).toBe('Quarter');
});

test('should display insert coin when no coins have been inserted', () => {
  const payment = shallow(<Payment />);
  const insertCoins = payment.find('p');

  expect(insertCoins).toHaveLength(1);
  expect(insertCoins.text()).toBe('INSERT COIN');
});
