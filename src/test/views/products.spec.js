import Products from '../../main/views/products';

import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
chai.should();

let products;

beforeEach(() => {
  products = shallow(<Products />);
});

test('there are three products (cola, chips and candy)', () => {
  products.find('button[type="button"]').should.have.lengthOf(3);
});

test('cola button', () => {
  const cola = products.find('#cola');

  cola.should.have.lengthOf(1);
  cola.text().should.equal('Cola');
});

test('chips button', () => {
  const chips = products.find('#chips');

  chips.should.have.lengthOf(1);
  chips.text().should.equal('Chips');
});

test('candy button', () => {
  const candy = products.find('#candy');

  candy.should.have.lengthOf(1);
  candy.text().should.equal('Candy');
});
