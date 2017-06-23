import all from '../../main/reducers/all';
import actions from '../../main/constants/actions';
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
    type: actions.UPDATE_BALANCE,
    amount: 0.1
  };

  const actualState = all.reduce(givenState, action);
  actualState.currentBalance.should.be.closeTo(0.15, .001)
});

test('should handle when a current balance hasn\'t been added', () => {
  const action = {
    type: actions.UPDATE_BALANCE,
    amount: 0.05
  };

  const actualState = all.reduce(undefined, action);

  actualState.currentBalance.should.equal(0.05);
});

test('should handle when an item has been purchased', () => {
  const givenState = {
    currentBalance: 1.00
  };

  const action = {
    type: actions.PURCHASE,
    item: {
      name: 'Cola',
      value: 1.00
    }
  };

  const actualState = all.reduce(givenState, action);

  actualState.should.deep.equal({
    currentBalance: 1.00,
    purchase: {
      name: 'Cola',
      value: 1.00
    }
  });
});
