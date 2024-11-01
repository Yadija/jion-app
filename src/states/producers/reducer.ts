// types
import { Pagination } from "../../types/pagination.type";
import { ProducersList } from "../../types/producer.type";
// actions
import { ActionType, ProducersAction } from "./action";

const initialState: ProducersList = {
  data: [],
  pagination: {
    last_visible_page: 1,
    has_next_page: false,
    current_page: 1,
    items: {
      count: 0,
      total: 0,
      per_page: 0,
    },
  } as Pagination,
};

function producersReducer(producers = initialState, action: ProducersAction) {
  switch (action.type) {
    case ActionType.RECEIVE_PRODUCERS:
      return action.payload.producers;
    case ActionType.CLEAR_PRODUCERS:
      return initialState;
    default:
      return producers;
  }
}

export default producersReducer;
