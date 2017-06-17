import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders without crashing', () => {
  shallow(<App />);
});

test('should have a nickel, dime and quarter button so that the user can give the machine that amount of money', () => {
  const app = shallow(<App />);
  const nickel = <button type="button">Nickel</button>;
  const dime = <button type="button">Dime</button>;
  const quarter = <button type="button">Quarter</button>;

  expect(app.contains(nickel)).toEqual(true);
  expect(app.contains(dime)).toEqual(true);
  expect(app.contains(quarter)).toEqual(true);
});
