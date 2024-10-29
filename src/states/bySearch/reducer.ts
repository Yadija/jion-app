import { ActionType } from "./action";

function bySearchReducer(bySearch = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_BY_SEARCH:
      return action.payload.bySearch;
    case ActionType.CLEAR_BY_SEARCH:
      return {};
    default:
      return bySearch;
  }
}

export default bySearchReducer;
