// types
import { MangaListState } from "../../types/manga.type";
import { ActionType, MangaAction } from "./action";

const initialState: MangaListState = {
  data: null,
  isLoading: true,
  error: null,
};

function mangaReducer(state = initialState, action: MangaAction) {
  switch (action.type) {
    case ActionType.RECEIVE_MANGA:
      return {
        ...state,
        data: action.payload.manga,
      };
    case ActionType.CLEAR_MANGA:
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

export default mangaReducer;
