// types
import { MangaList } from "../../types/manga.type";
import { Pagination } from "../../types/pagination.type";
// actions
import { ActionType, TopMangaAction } from "./action";

const initialState: MangaList = {
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

function topMangaReducer(topManga = initialState, action: TopMangaAction) {
  switch (action.type) {
    case ActionType.RECEIVE_TOP_MANGA:
      return action.payload.topManga;
    case ActionType.CLEAR_TOP_MANGA:
      return initialState;
    default:
      return topManga;
  }
}

export default topMangaReducer;
