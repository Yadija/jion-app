// types
import { ProducersList } from "../../types/producer.type";
// utils
import api from "../../utils/api";
// states
import { AppDispatch } from "../index";

enum ActionType {
  RECEIVE_PRODUCERS = "producers/receive",
  CLEAR_PRODUCERS = "producers/clear",
  SET_LOADING = "loading/set",
  SET_ERROR = "error/set",
}

export type ProducersAction =
  | {
      type: ActionType.RECEIVE_PRODUCERS;
      payload: { producers: ProducersList };
    }
  | { type: ActionType.CLEAR_PRODUCERS }
  | { type: ActionType.SET_LOADING; payload: boolean }
  | { type: ActionType.SET_ERROR; payload: string | null };

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

function asyncReceiveProducers(page?: number) {
  return async (dispatch: AppDispatch) => {
    dispatch(clearProducersActionCreator());
    dispatch(setLoadingActionCreator(true));
    dispatch(setErrorActionCreator(null));

    try {
      const producers = await api.getProducers(page);
      dispatch(receiveProducersActionCreator(producers));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching producers:", error);
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

export { ActionType, asyncReceiveProducers, receiveProducersActionCreator };
