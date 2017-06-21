import Init from '../main/init';
import App from '../main/App';
import all from '../main/reducers/all';

import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import * as redux from 'redux';

import sinon from 'sinon';
import chai from 'chai';
chai.should();
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
    init.find(Provider).should.have.lengthOf(1);
  });

  test('should create provider with a store', () => {
    const init = shallow(<Init />);
    const provider = init.find(Provider);
    const actualStore = provider.props().store;

    actualStore.should.equal(store);
  });

  test('should create provider with our app', () => {
    const init = shallow(<Init />);
    const provider = init.find(Provider);

    provider.children().should.have.lengthOf(1);
    provider.children(App).should.have.lengthOf(1);
  });
});
