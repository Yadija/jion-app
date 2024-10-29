import { ActionType } from "./action";

function producersReducer(producers = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_PRODUCERS:
      return action.payload.producers;
    case ActionType.CLEAR_PRODUCERS:
      return {};
    default:
      return producers;
  }
}

export default producersReducer;
