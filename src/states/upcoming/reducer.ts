import { ActionType } from "./action";

function upcomingReducer(upcoming = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_UPCOMING:
      return action.payload.upcoming;
    case ActionType.CLEAR_UPCOMING:
      return {};
    default:
      return upcoming;
  }
}

export default upcomingReducer;
