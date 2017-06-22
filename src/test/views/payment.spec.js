import Payment from '../../main/views/payment';
import actions from '../../main/constants/actions';

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai from 'chai';
chai.should();
chai.use(sinonChai);

let sandbox = sinon.sandbox.create();

describe('Payment', () => {
  let payment,
      dispatch;

  beforeEach(() => {
    dispatch = sandbox.stub();
    payment = shallow(<Payment dispatch={dispatch}/>);
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
    const currentBalance = 0.1500000000000000000000000000002;
    const paymentWithBalance = shallow(<Payment currentBalance={currentBalance} dispatch={dispatch}/>);
    const coinText = paymentWithBalance.find('p');

    coinText.should.have.lengthOf(1);
    coinText.text().should.equal('$0.15');
  });

  test('should add 5 cents when nickel button clicked', () => {
    const nickel = payment.find('#nickel');
    nickel.simulate('click');

    dispatch.should.have.been.calledWith({
      type: actions.INSERT_COIN,
      amount: 0.05
    });
  });

  test('should add 10 cents when dime button clicked', () => {
    const dime = payment.find('#dime');
    dime.simulate('click');

    dispatch.should.have.been.calledWith({
      type: actions.INSERT_COIN,
      amount: 0.1
    });
  });

  test('should add 25 cents when quarter button clicked', () => {
    const quarter = payment.find('#quarter');
    quarter.simulate('click');

    dispatch.should.have.been.calledWith({
      type: actions.INSERT_COIN,
      amount: 0.25
    });
  });
});
