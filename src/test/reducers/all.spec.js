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

test('should add new balance to current balance on coin insertion', () => {
  const givenState = {
    currentBalance: 0.05
  };

  const action = {
    type: 'INSERT_COIN',
    amount: 0.1
  };

  const actualState = all.reduce(givenState, action);
  actualState.currentBalance.should.be.closeTo(0.15, .001)
});
