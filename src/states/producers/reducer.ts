// actions
import { ActionType, ProducersAction } from "@/states/producers/action";
// types
import { ProducersListState } from "@/types/producer.type";

const initialState: ProducersListState = {
  data: null,
  isLoading: true,
  error: null,
};

function producersReducer(state = initialState, action: ProducersAction) {
  switch (action.type) {
    case ActionType.RECEIVE_PRODUCERS:
      return {
        ...state,
        data: action.payload.producers,
      };
    case ActionType.CLEAR_PRODUCERS:
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

export default producersReducer;
