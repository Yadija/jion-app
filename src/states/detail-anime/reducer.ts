// actions
import { ActionType, DetailAnimeAction } from "@/states/detail-anime/action";
// types
import { AnimeDetailState } from "@/types/anime.type";

const initialState: AnimeDetailState = {
  data: null,
  isLoading: true,
  error: null,
};

function detailAnimeReducer(state = initialState, action: DetailAnimeAction) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_ANIME:
      return {
        ...state,
        data: action.payload.detail,
      };
    case ActionType.CLEAR_DETAIL_ANIME:
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

export default detailAnimeReducer;
