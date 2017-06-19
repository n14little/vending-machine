import coinJar from '../../main/utils/coin-jar';

test('the coin jar accepts nickels', () => {
  expect(coinJar.insert('nickel')).toBe(0.05);
});

test('the coin jar accepts dimes', () => {
  expect(coinJar.insert('dime')).toBe(0.1);
});

test('the coin jar accepts quarters', () => {
  expect(coinJar.insert('quarter')).toBe(0.25);
});
