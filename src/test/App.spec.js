import { App } from '../main/App';
import Products from '../main/views/products';
import CoinMachine from '../main/views/coin-machine';
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
