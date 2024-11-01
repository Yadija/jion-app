// types
import { ProducersList } from "../../types/producer.type";
// utils
import api from "../../utils/api";
// states
import { AppDispatch } from "../index";

enum ActionType {
  RECEIVE_PRODUCERS = "RECEIVE_PRODUCERS",
  CLEAR_PRODUCERS = "CLEAR_PRODUCERS",
}

export type ProducersAction =
  | {
      type: ActionType.RECEIVE_PRODUCERS;
      payload: { producers: ProducersList };
    }
  | { type: ActionType.CLEAR_PRODUCERS };

function receiveProducersActionCreator(producers: ProducersList) {
  return {
    type: ActionType.RECEIVE_PRODUCERS,
    payload: {
      producers,
    },
  };
}

function clearProducersActionCreator() {
  return {
    type: ActionType.CLEAR_PRODUCERS,
  };
}

function asyncReceiveProducers(page?: number) {
  return async (dispatch: AppDispatch) => {
    dispatch(clearProducersActionCreator());

    try {
      const producers = await api.getProducers(page);
      dispatch(receiveProducersActionCreator(producers));
    } catch (error) {
      console.error("Error fetching producers:", error);
      // dispatch(receiveProducersActionCreator({ error: error.message }));
    }
  };
}

export { ActionType, asyncReceiveProducers, receiveProducersActionCreator };
