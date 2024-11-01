// types
import { AnimeList } from "../../types/anime.type";
import { Pagination } from "../../types/pagination.type";
// actions
import { ActionType, UpcomingAction } from "./action";

const initialState: AnimeList = {
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

function upcomingReducer(upcoming = initialState, action: UpcomingAction) {
  switch (action.type) {
    case ActionType.RECEIVE_UPCOMING:
      return action.payload.upcoming;
    case ActionType.CLEAR_UPCOMING:
      return initialState;
    default:
      return upcoming;
  }
}

export default upcomingReducer;
