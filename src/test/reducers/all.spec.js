import all from '../../main/reducers/all';

test('default state', () => {
  const expectedState = {};

  const actualState = all.reduce(undefined, {});
  expect(actualState).toEqual(expectedState);
});

test('cannot find action returns state given', () => {
  const givenState = {
    foo: 'bar'
  };

  const action = {
    type: 'bogus'
  };

  const actualState = all.reduce(givenState, action);
  expect(actualState).toBe(givenState);
});
