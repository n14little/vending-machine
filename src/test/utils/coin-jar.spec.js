import coinJar from '../../main/utils/coin-jar';

test('the coin jar accepts nickels', () => {
  expect(coinJar.insert('nickel')).toBe(0.05);
});

test('the coin jar adds nickels to an already established amount', () => {
  expect(coinJar.insert('nickel', 0.05)).toBe(0.1);
});

test('the coin jar accepts dimes', () => {
  expect(coinJar.insert('dime')).toBe(0.1);
});

test('the coin jar adds dimes to an already established amount', () => {
  expect(coinJar.insert('dime', 0.05)).toBe(0.15);
});

test('the coin jar accepts quarters', () => {
  expect(coinJar.insert('quarter')).toBe(0.25);
});

test('the coin jar adds quarters to an already established amount', () => {
  expect(coinJar.insert('quarter', 0.05)).toBe(0.3);
});

test('the coin jar does not accept pennies', () => {
  expect(coinJar.insert('penny')).toBe(undefined);
});
