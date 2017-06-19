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

test('the coin jar does not accept pennies', () => {
  expect(coinJar.insert('penny')).toBe(undefined);
});

test('the coin jar adds coin to an already established amount', () => {
  const currentAmount = 0.05;
  expect(coinJar.insert('nickel', currentAmount)).toBe(0.1);
  expect(coinJar.insert('dime', currentAmount)).toBe(0.15);
  expect(coinJar.insert('quarter', currentAmount)).toBe(0.3);
});
