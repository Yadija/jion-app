import { ActionType } from './action';

function detailProducerReducer(detailProducer = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_PRODUCER:
      return action.payload.detailProducer;
    case ActionType.CLEAR_DETAIL_PRODUCER:
      return {};
    default:
      return detailProducer;
  }
}

export default detailProducerReducer;
