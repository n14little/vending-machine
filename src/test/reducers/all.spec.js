import all from '../../main/reducers/all';
import chai from 'chai';

chai.should();

test('default state', () => {
  const expectedState = {};

  const actualState = all.reduce(undefined, {});
  actualState.should.deep.equal(expectedState);
});

test('cannot find action returns state given', () => {
  const givenState = {
    foo: 'bar'
  };

  const action = {
    type: 'bogus'
  };

  const actualState = all.reduce(givenState, action);
  actualState.should.equal(givenState);
});
