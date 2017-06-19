export default {
  insert(coin) {
    if (coin === 'nickel') {
      return 0.05;
    }
    return 0.1;
  }
}
