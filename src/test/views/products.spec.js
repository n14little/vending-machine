import Products from '../../main/views/products';

import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.should();
chai.use(sinonChai);

let products,
    dispatch,
    sandbox = sinon.sandbox.create();

beforeEach(() => {
  dispatch = sandbox.stub();
  products = shallow(<Products dispatch={dispatch}/>);
});

test('there are three products (cola, chips and candy)', () => {
  products.find('button[type="button"]').should.have.lengthOf(3);
});

test('cola button', () => {
  const cola = products.find('#cola');

  cola.should.have.lengthOf(1);
  cola.text().should.equal('Cola - $1.00');
});

test('cola button should dispatch PURCHASE with product and price', () => {
  const cola = products.find('#cola');

  cola.simulate('click');

  dispatch.should.have.been.calledOnce;
  dispatch.should.have.been.calledWith({
    type: 'PURCHASE',
    item: {
      name: 'Cola',
      value: 1.00
    }
  })
});

test('chips button should dispatch PURCHASE with product and price', () => {
  const chips = products.find('#chips');

  chips.simulate('click');

  dispatch.should.have.been.calledOnce;
  dispatch.should.have.been.calledWith({
    type: 'PURCHASE',
    item: {
      name: 'Chips',
      value: 0.50
    }
  })
});

test('candy button should dispatch PURCHASE with product and price', () => {
  const candy = products.find('#candy');

  candy.simulate('click');

  dispatch.should.have.been.calledOnce;
  dispatch.should.have.been.calledWith({
    type: 'PURCHASE',
    item: {
      name: 'Candy',
      value: 0.65
    }
  })
});

test('chips button', () => {
  const chips = products.find('#chips');

  chips.should.have.lengthOf(1);
  chips.text().should.equal('Chips - $0.50');
});

test('candy button', () => {
  const candy = products.find('#candy');

  candy.should.have.lengthOf(1);
  candy.text().should.equal('Candy - $0.65');
});
