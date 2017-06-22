import Products from '../../main/views/products';

import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
chai.should();

test('there are three products (cola, chips and candy)', () => {
  const products = shallow(<Products />);
  products.find('button[type="button"]').should.have.lengthOf(3);
});
