const acceptableCoins = {
  nickel: 0.05,
  dime: 0.1,
  quarter: 0.25
};

export default {
  insert(coin) {
    return acceptableCoins[coin];
  }
};
