import actions from '../../main/constants/actions';
import chai from 'chai';
chai.should();

test('should have UPDATE_BALANCE', () => {
  actions.UPDATE_BALANCE.should.equal('UPDATE_BALANCE');
});

test('should have PURCHASE', () => {
  actions.PURCHASE.should.equal('PURCHASE');
});
