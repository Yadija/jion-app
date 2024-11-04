// actions
import { ActionType, UpcomingAction } from "@/states/upcoming/action";
// types
import { AnimeListState } from "@/types/anime.type";

const initialState: AnimeListState = {
  data: null,
  isLoading: true,
  error: null,
};

function upcomingReducer(state = initialState, action: UpcomingAction) {
  switch (action.type) {
    case ActionType.RECEIVE_UPCOMING:
      return {
        ...state,
        data: action.payload.upcoming,
      };
    case ActionType.CLEAR_UPCOMING:
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

export default upcomingReducer;
