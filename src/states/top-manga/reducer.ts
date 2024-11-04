// actions
import { ActionType, TopMangaAction } from "@/states/top-manga/action";
// types
import { MangaListState } from "@/types/manga.type";

const initialState: MangaListState = {
  data: null,
  isLoading: true,
  error: null,
};

function topMangaReducer(state = initialState, action: TopMangaAction) {
  switch (action.type) {
    case ActionType.RECEIVE_TOP_MANGA:
      return {
        ...state,
        data: action.payload.topManga,
      };
    case ActionType.CLEAR_TOP_MANGA:
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

export default topMangaReducer;
