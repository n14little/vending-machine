import Payment from '../../main/views/payment';

import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
chai.should();

describe('Payment', () => {
  let payment;

  beforeEach(() => {
    payment = shallow(<Payment />);
  });

  test('should have 3 buttons', () => {
    payment.find('button[type="button"]').should.have.lengthOf(3);
  });

  test('should have a nickel', () => {
    const nickel = payment.find('#nickel');

    nickel.should.have.lengthOf(1);
    nickel.text().should.equal('Nickel');
  });

  test('should have a dime', () => {
    const dime = payment.find('#dime');

    dime.should.have.lengthOf(1);
    dime.text().should.equal('Dime');
  });

  test('should have a quarter', () => {
    const quarter = payment.find('#quarter');

    quarter.should.have.lengthOf(1);
    quarter.text().should.equal('Quarter');
  });

  test('should display insert coin when no coins have been inserted', () => {
    const insertCoins = payment.find('p');

    insertCoins.should.have.lengthOf(1);
    insertCoins.text().should.equal('INSERT COIN');
  });

  test('should display current balance when there is one', () => {
    const paymentWithBalance = shallow(<Payment currentBalance={0.05}/>);
    const coinText = paymentWithBalance.find('p');

    coinText.should.have.lengthOf(1);
    coinText.text().should.equal('$0.05');
  });
});
