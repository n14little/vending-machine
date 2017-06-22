import actions from '../../main/constants/actions';
import chai from 'chai';
chai.should();

test('should have INSERT_COIN', () => {
  actions.INSERT_COIN.should.equal('INSERT_COIN');
});

test('should have PURCHASE', () => {
  actions.PURCHASE.should.equal('PURCHASE');
});
