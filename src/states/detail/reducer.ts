// types
import { AnimeDetailState } from "../../types/anime.type";
import { MangaDetailState } from "../../types/manga.type";
// actions
import { ActionType, DetailAction } from "./action";

const initialState: AnimeDetailState | MangaDetailState = {
  data: null,
  isLoading: true,
  error: null,
};

function detailReducer(state = initialState, action: DetailAction) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL:
      return {
        ...state,
        data: action.payload.detail,
      };
    case ActionType.CLEAR_DETAIL:
      return initialState;
    case ActionType.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default detailReducer;
