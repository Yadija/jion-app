// actions
import { ActionType, TopAnimeAction } from "@/states/top-anime/action";
// types
import { AnimeListState } from "@/types/anime.type";

const initialState: AnimeListState = {
  data: null,
  isLoading: true,
  error: null,
};

function topAnimeReducer(state = initialState, action: TopAnimeAction) {
  switch (action.type) {
    case ActionType.RECEIVE_TOP_ANIME:
      return {
        ...state,
        data: action.payload.topAnime,
      };
    case ActionType.CLEAR_TOP_ANIME:
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

export default topAnimeReducer;
