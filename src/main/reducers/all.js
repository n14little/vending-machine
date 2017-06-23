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
    case actions.SUCCESSFUL_PURCHASE:
      delete state.purchase;
      return Object.assign({}, state, {
        currentBalance: 0
      });
    case actions.NOT_ENOUGH_MONEY:
      delete state.purchase;
      return state;
    default:
      return state;
  }
};

export default {
  reduce
};
