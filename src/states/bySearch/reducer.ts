// types
import { AnimeListState } from "../../types/anime.type";
import { MangaListState } from "../../types/manga.type";
import { ActionType, BySearchAction } from "./action";

const initialState: AnimeListState | MangaListState = {
  data: null,
  isLoading: true,
  error: null,
};

function bySearchReducer(state = initialState, action: BySearchAction) {
  switch (action.type) {
    case ActionType.RECEIVE_BY_SEARCH:
      return {
        ...state,
        data: action.payload.bySearch,
      };
    case ActionType.CLEAR_BY_SEARCH:
      return initialState;
    case ActionType.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ActionType.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}

export default bySearchReducer;
