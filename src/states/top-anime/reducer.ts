// types
import { AnimeList } from "../../types/anime.type";
import { Pagination } from "../../types/pagination.type";
// actions
import { ActionType, TopAnimeAction } from "./action";

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

function topAnimeReducer(topAnime = initialState, action: TopAnimeAction) {
  switch (action.type) {
    case ActionType.RECEIVE_TOP_ANIME:
      return action.payload.topAnime;
    case ActionType.CLEAR_TOP_ANIME:
      return initialState;
    default:
      return topAnime;
  }
}

export default topAnimeReducer;
