import all from '../../main/reducers/all';

test('default state', () => {
  const expectedState = {};

  const actualState = all();
  expect(actualState).toEqual(expectedState);
});
