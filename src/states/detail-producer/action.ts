// lib
import api from "@/lib/api";
// states
import { AppDispatch } from "@/states";
// types
import { ProducerDetail } from "@/types/producer.type";

enum ActionType {
  RECEIVE_DETAIL_PRODUCER = "detail-producer/receive",
  CLEAR_DETAIL_PRODUCER = "detail-producer/clear",
  SET_LOADING = "loading/set",
  SET_ERROR = "error/set",
}

export type DetailProducerAction =
  | {
      type: ActionType.RECEIVE_DETAIL_PRODUCER;
      payload: { detailProducer: ProducerDetail };
    }
  | { type: ActionType.CLEAR_DETAIL_PRODUCER }
  | { type: ActionType.SET_LOADING; payload: boolean }
  | { type: ActionType.SET_ERROR; payload: string | null };

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

function setLoadingActionCreator(isLoading: boolean) {
  return {
    type: ActionType.SET_LOADING,
    payload: isLoading,
  };
}

function setErrorActionCreator(error: string | null) {
  return {
    type: ActionType.SET_ERROR,
    payload: error,
  };
}

function asyncReceiveDetailProducer(id: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(clearDetailProducerActionCreator());
    dispatch(setLoadingActionCreator(true));
    dispatch(setErrorActionCreator(null));

    try {
      const detailProducer = await api.getDetailProducer(id);
      dispatch(receiveDetailProducerActionCreator(detailProducer));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching detail producer:", error);
        dispatch(setErrorActionCreator(error.message));
      } else {
        console.error("Unknown error:", error);
        dispatch(setErrorActionCreator("An unknown error occurred"));
      }
    } finally {
      dispatch(setLoadingActionCreator(false));
    }
  };
}

export {
  ActionType,
  asyncReceiveDetailProducer,
  receiveDetailProducerActionCreator,
};
