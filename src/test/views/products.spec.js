import Products from '../../main/views/products';

import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
chai.should();

test('there are three products (cola, chips and candy)', () => {
  const products = shallow(<Products />);
  products.find('button[type="button"]').should.have.lengthOf(3);
});

test('cola button', () => {
  const products = shallow(<Products />);
  const cola = products.find('#cola');

  cola.should.have.lengthOf(1);
  cola.text().should.equal('Cola');
});

test('chips button', () => {
  const products = shallow(<Products />);
  const chips = products.find('#chips');

  chips.should.have.lengthOf(1);
  chips.text().should.equal('Chips');
});

test('candy button', () => {
  const products = shallow(<Products />);
  const candy = products.find('#candy');

  candy.should.have.lengthOf(1);
  candy.text().should.equal('Candy');
});
