import actions from '../constants/actions';

const reduce = (state = {}, action) => {
  switch (action.type) {
    case actions.UPDATE_BALANCE:
      const currentBalance = state.currentBalance || 0;
      return Object.assign({}, state, {
        currentBalance: currentBalance + action.amount
      });
    case actions.PURCHASE:
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
