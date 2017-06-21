const reduce = (state = {}, action) => {
  switch (action.type) {
    case 'INSERT_COIN':
      return Object.assign({}, state, {
        currentBalance: state.currentBalance + action.amount
      });
    default:
      return state;
  }
};

export default {
  reduce
};
