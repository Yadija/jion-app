// actions
import { ActionType, DetailMangaAction } from "@/states/detail-manga/action";
// types
import { MangaDetailState } from "@/types/manga.type";

const initialState: MangaDetailState = {
  data: null,
  isLoading: true,
  error: null,
};

function detailMangaReducer(state = initialState, action: DetailMangaAction) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_MANGA:
      return {
        ...state,
        data: action.payload.detail,
      };
    case ActionType.CLEAR_DETAIL_MANGA:
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

export default detailMangaReducer;
