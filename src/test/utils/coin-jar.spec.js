import coinJar from '../../main/utils/coin-jar';

test('the coin jar accepts nickels', () => {
  expect(coinJar.insert('nickel')).toBe(0.05);
});
