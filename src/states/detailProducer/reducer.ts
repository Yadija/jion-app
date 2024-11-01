// types
import { ProducerDetail } from "../../types/producer.type";
// actions
import { ActionType, DetailProducerAction } from "./action";

const initialState: ProducerDetail = {
  data: null,
};

function detailProducerReducer(
  detailProducer = initialState,
  action: DetailProducerAction,
) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_PRODUCER:
      return action.payload.detailProducer;
    case ActionType.CLEAR_DETAIL_PRODUCER:
      return initialState;
    default:
      return detailProducer;
  }
}

export default detailProducerReducer;
