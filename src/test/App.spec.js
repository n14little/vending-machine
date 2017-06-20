import React from 'react';
import { shallow } from 'enzyme';
import App from '../main/App';
import Payment from '../main/views/payment';

test('app should have a Payment component', () => {
  const app = shallow(<App />);

  expect(app.contains(<Payment />)).toBe(true);
});
