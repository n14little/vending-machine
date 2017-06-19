export default {
  insert(coin) {
    if (coin === 'nickel') {
      return 0.05;
    } else if (coin === 'dime') {
      return 0.1;
    }

    return 0.25;
  }
}
