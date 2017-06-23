import CoinMachine from '../../main/views/coin-machine';
import actions from '../../main/constants/actions';

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai from 'chai';
chai.should();
chai.use(sinonChai);

let sandbox = sinon.sandbox.create();

describe('CoinMachine', () => {
  let coinMachine,
      dispatch;

  beforeEach(() => {
    dispatch = sandbox.stub();
    coinMachine = shallow(<CoinMachine dispatch={dispatch}/>);
  });

  test('should have 3 buttons', () => {
    coinMachine.find('button[type="button"]').should.have.lengthOf(3);
  });

  test('should have a nickel', () => {
    const nickel = coinMachine.find('#nickel');

    nickel.should.have.lengthOf(1);
    nickel.text().should.equal('Nickel');
  });

  test('should have a dime', () => {
    const dime = coinMachine.find('#dime');

    dime.should.have.lengthOf(1);
    dime.text().should.equal('Dime');
  });

  test('should have a quarter', () => {
    const quarter = coinMachine.find('#quarter');

    quarter.should.have.lengthOf(1);
    quarter.text().should.equal('Quarter');
  });

  test('should display insert coin when no coins have been inserted', () => {
    const insertCoins = coinMachine.find('p');

    insertCoins.should.have.lengthOf(1);
    insertCoins.text().should.equal('INSERT COIN');
  });

  test('should display current balance when there is one', () => {
    const currentBalance = 0.1500000000000000000000000000002;
    const coinMachineWithBalance = shallow(<CoinMachine currentBalance={currentBalance} dispatch={dispatch}/>);
    const coinText = coinMachineWithBalance.find('p');

    coinText.should.have.lengthOf(1);
    coinText.text().should.equal('$0.15');
  });

  test('should add 5 cents when nickel button clicked', () => {
    const nickel = coinMachine.find('#nickel');
    nickel.simulate('click');

    dispatch.should.have.been.calledWith({
      type: actions.INSERT_COIN,
      amount: 0.05
    });
  });

  test('should add 10 cents when dime button clicked', () => {
    const dime = coinMachine.find('#dime');
    dime.simulate('click');

    dispatch.should.have.been.calledWith({
      type: actions.INSERT_COIN,
      amount: 0.1
    });
  });

  test('should add 25 cents when quarter button clicked', () => {
    const quarter = coinMachine.find('#quarter');
    quarter.simulate('click');

    dispatch.should.have.been.calledWith({
      type: actions.INSERT_COIN,
      amount: 0.25
    });
  });
});
