import coinJar from '../../main/utils/coin-jar';

import chai from 'chai';
chai.should();

test('the coin jar accepts nickels', () => {
  const nickelInserted = coinJar.insert('nickel');
  nickelInserted.should.equal(0.05);
});

test('the coin jar accepts dimes', () => {
  const dimeInserted = coinJar.insert('dime');
  dimeInserted.should.equal(0.1);
});

test('the coin jar accepts quarters', () => {
  const quarterInserted = coinJar.insert('quarter');
  quarterInserted.should.equal(0.25);
});

test('the coin jar does not accept pennies', () => {
  const pennyInserted = coinJar.insert('penny');
  // had to use jest's expect here because
  // should.not.exist(pennyInserted) caused this test
  // to be skipped
  expect(pennyInserted).toBeUndefined();
});

test('the coin jar adds coin to an already established amount', () => {
  const currentAmount = 0.05;

  const nickelAdded = coinJar.insert('nickel', currentAmount);
  const dimeAdded = coinJar.insert('dime', currentAmount);
  const quarterAdded = coinJar.insert('quarter', currentAmount);

  nickelAdded.should.equal(0.1);
  dimeAdded.should.equal(0.15);
  quarterAdded.should.equal(0.3);
});
