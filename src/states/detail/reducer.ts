// types
import { AnimeDetail } from "../../types/anime.type";
import { MangaDetail } from "../../types/manga.type";
// actions
import { ActionType, DetailAction } from "./action";

const initialState = { data: null } as AnimeDetail | MangaDetail;

function detailReducer(detail = initialState, action: DetailAction) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL:
      return action.payload.detail;
    case ActionType.CLEAR_DETAIL:
      return initialState;
    default:
      return detail;
  }
}

export default detailReducer;
