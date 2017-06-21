const reduce = (state = {}, action) => {
  switch (action.type) {
    case 'INSERT_COIN':
      const currentBalance = state.currentBalance || 0;
      return Object.assign({}, state, {
        currentBalance: currentBalance + action.amount
      });
    default:
      return state;
  }
};

export default {
  reduce
};
