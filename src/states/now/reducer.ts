// actions
import { ActionType, NowAction } from "@/states/now/action";
// types
import { AnimeListState } from "@/types/anime.type";

const initialState: AnimeListState = {
  data: null,
  isLoading: true,
  error: null,
};

function nowReducer(state = initialState, action: NowAction) {
  switch (action.type) {
    case ActionType.RECEIVE_NOW:
      return {
        ...state,
        data: action.payload.now,
      };
    case ActionType.CLEAR_NOW:
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

export default nowReducer;
