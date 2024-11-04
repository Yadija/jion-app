// actions
import {
  ActionType,
  DetailProducerAction,
} from "@/states/detail-producer/action";
// types
import { ProducerDetailState } from "@/types/producer.type";

const initialState: ProducerDetailState = {
  data: null,
  isLoading: true,
  error: null,
};

function detailProducerReducer(
  state = initialState,
  action: DetailProducerAction,
) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_PRODUCER:
      return {
        ...state,
        data: action.payload.detailProducer,
      };
    case ActionType.CLEAR_DETAIL_PRODUCER:
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

export default detailProducerReducer;
