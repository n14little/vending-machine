import actions from '../../main/constants/actions';
import chai from 'chai';
chai.should();

test('should have UPDATE_BALANCE', () => {
  actions.UPDATE_BALANCE.should.equal('UPDATE_BALANCE');
});

test('should have PURCHASE', () => {
  actions.PURCHASE.should.equal('PURCHASE');
});

test('should have SUCCESSFUL_PURCHASE', () => {
  actions.SUCCESSFUL_PURCHASE.should.equal('SUCCESSFUL_PURCHASE');
});

test('should have NOT_ENOUGH_MONEY', () => {
  actions.NOT_ENOUGH_MONEY.should.equal('NOT_ENOUGH_MONEY');
});
