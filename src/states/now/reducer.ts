import { ActionType } from "./action";

function nowReducer(now = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_NOW:
      return action.payload.now;
    case ActionType.CLEAR_NOW:
      return {};
    default:
      return now;
  }
}

export default nowReducer;
