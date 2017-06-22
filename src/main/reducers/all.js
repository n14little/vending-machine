import actions from '../constants/actions';

const reduce = (state = {}, action) => {
  switch (action.type) {
    case actions.INSERT_COIN:
      const currentBalance = state.currentBalance || 0;
      return Object.assign({}, state, {
        currentBalance: currentBalance + action.amount
      });
    case 'PURCHASE':
      return Object.assign({}, state, {
        purchase: {
          name: action.item.name,
          value: action.item.value
        }
      });
    default:
      return state;
  }
};

export default {
  reduce
};
