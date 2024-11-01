// types
import { ProducerDetail } from "../../types/producer.type";
// utils
import api from "../../utils/api";
// states
import { AppDispatch } from "../index";

enum ActionType {
  RECEIVE_DETAIL_PRODUCER = "detail-producer/receive",
  CLEAR_DETAIL_PRODUCER = "detail-producer/clear",
}

export type DetailProducerAction =
  | {
      type: ActionType.RECEIVE_DETAIL_PRODUCER;
      payload: { detailProducer: ProducerDetail };
    }
  | { type: ActionType.CLEAR_DETAIL_PRODUCER };

function receiveDetailProducerActionCreator(detailProducer: ProducerDetail) {
  return {
    type: ActionType.RECEIVE_DETAIL_PRODUCER,
    payload: {
      detailProducer,
    },
  };
}

function clearDetailProducerActionCreator() {
  return {
    type: ActionType.CLEAR_DETAIL_PRODUCER,
  };
}

function asyncReceiveDetailProducer(type: string, id: number) {
  return async (dispatch: AppDispatch) => {
    dispatch(clearDetailProducerActionCreator());

    try {
      const detailProducer = await api.getDetail(type, id);
      dispatch(
        receiveDetailProducerActionCreator(detailProducer as ProducerDetail),
      );
    } catch (error) {
      console.error("Error fetching detail producer:", error);
      // dispatch(receiveDetailProducerActionCreator({ error: error.message }));
    }
  };
}

export {
  ActionType,
  asyncReceiveDetailProducer,
  receiveDetailProducerActionCreator,
};
