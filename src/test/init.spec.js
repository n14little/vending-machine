import Init from '../main/init';

import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'

test('should create react-redux provider', () => {
  const provider = shallow(<Init />);
  expect(provider.find(Provider)).toHaveLength(1);
})
