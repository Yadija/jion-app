import { ActionType } from "./action";

function detailReducer(detail = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL:
      return action.payload.detail;
    case ActionType.CLEAR_DETAIL:
      return {};
    default:
      return detail;
  }
}

export default detailReducer;
