// actions
import { ActionType, AnimeAction } from "@/states/anime/action";
// types
import { AnimeListState } from "@/types/anime.type";

const initialState: AnimeListState = {
  data: null,
  isLoading: true,
  error: null,
};

function animeReducer(state = initialState, action: AnimeAction) {
  switch (action.type) {
    case ActionType.RECEIVE_ANIME:
      return {
        ...state,
        data: action.payload.anime,
      };
    case ActionType.CLEAR_ANIME:
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

export default animeReducer;
