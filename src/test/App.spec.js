import { App } from '../main/App';
import Products from '../main/views/products';
import CoinMachine from '../main/views/coin-machine';
import PaymentProcessor from '../main/views/payment-processor';
import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';

chai.should();

test('app should have a CoinMachine component', () => {
  const dispatch = 'fake dispatch';
  const currentBalance = 0;
  const app = shallow(<App dispatch={dispatch} currentBalance={currentBalance}/>);
  app.contains(<CoinMachine currentBalance={currentBalance} dispatch={dispatch}/>).should.equal(true);
});

test('app should have a Products component', () => {
  const dispatch = 'fake dispatch';
  const currentBalance = 0;
  const app = shallow(<App dispatch={dispatch} currentBalance={currentBalance}/>);
  app.contains(<Products dispatch={dispatch}/>).should.equal(true);
});

test('app should have a PaymentProcessor component if a purchase has been made', () => {
  const purchase = {
    name: 'blah',
    value: 0.5
  };
  const currentBalance = 0.5;

  const app = shallow(<App purchase={purchase} currentBalance={currentBalance}/>);
  app.contains(<PaymentProcessor purchase={purchase} currentBalance={currentBalance}/>).should.equal(true);
});

test('should not have a PaymentProcessor component if a purchase has not been made', () => {
  const app = shallow(<App />);
  app.children().should.have.lengthOf(2);
  app.contains(<PaymentProcessor purchase={undefined} currentBalance={undefined}/>).should.equal(false);
});
