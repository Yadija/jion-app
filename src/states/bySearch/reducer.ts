// types
import { Pagination } from "../../types/pagination.type";
// action
import { ActionType, BySearchAction } from "./action";

const initialState = {
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

function bySearchReducer(bySearch = initialState, action: BySearchAction) {
  switch (action.type) {
    case ActionType.RECEIVE_BY_SEARCH:
      return action.payload.bySearch;
    case ActionType.CLEAR_BY_SEARCH:
      return initialState;
    default:
      return bySearch;
  }
}

export default bySearchReducer;
