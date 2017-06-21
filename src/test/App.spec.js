import React from 'react';
import { shallow } from 'enzyme';
import App from '../main/App';
import Payment from '../main/views/payment';
import chai from 'chai';

chai.should();

test('app should have a Payment component', () => {
  const app = shallow(<App />);
  app.contains(<Payment />).should.equal(true);
});
