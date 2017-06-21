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
  const app = shallow(<App />);
  app.contains(<Payment />).should.equal(true);
});
