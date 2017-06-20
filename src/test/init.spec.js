import Init from '../main/init';
import App from '../main/App';
import all from '../main/reducers/all';

import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import * as redux from 'redux';

import sinon from 'sinon';
let sandbox = sinon.sandbox.create();

describe('provider', () => {
  let store;

  beforeAll(() => {
    const reducer = sandbox.stub(all, 'reduce');

    // I'm torn here.
    // I don't really care what createStore returns.
    // I only care that it is used for my provider's props.
    // However, I don't like seeing the console warnings either.
    // They muddy the output.
    store = {
      subscribe: () => {},
      dispatch: () => {},
      getState: () => {}
    };
    sandbox.stub(redux, 'createStore').withArgs(reducer).returns(store);
  });

  test('should create react-redux provider', () => {
    const init = shallow(<Init />);
    expect(init.find(Provider)).toHaveLength(1);
  });

  test('should create provider with a store', () => {
    const init = shallow(<Init />);
    const provider = init.find(Provider);

    expect(provider.props().store).toBe(store);
  });

  test('should create provider with our app', () => {
    const init = shallow(<Init />);
    const provider = init.find(Provider);

    expect(provider.children()).toHaveLength(1);
    expect(provider.children(App)).toHaveLength(1);
  });
});
