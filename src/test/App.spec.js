import { App } from '../main/App';
import Payment from '../main/views/payment';
import * as reactRedux from 'react-redux';
import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
chai.should();

let sandbox = sinon.sandbox.create();

test('app should have a Payment component', () => {
  const dispatch = 'fake dispatch';
  const currentBalance = 0;
  const app = shallow(<App dispatch={dispatch} currentBalance={currentBalance}/>);
  app.contains(<Payment currentBalance={currentBalance} dispatch={dispatch}/>).should.equal(true);
});
