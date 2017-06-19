const acceptableCoins = {
  nickel: 0.05,
  dime: 0.1,
  quarter: 0.25
};

export default {
  insert(coin, currentAmount = 0) {
    const amountToAdd = acceptableCoins[coin];

    if (amountToAdd) {
      return parseFloat((amountToAdd + currentAmount).toPrecision(2));
    }
  }
};
