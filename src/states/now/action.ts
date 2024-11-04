// lib
import api from "../../lib/api";
// types
import { AnimeList } from "../../types/anime.type";
// states
import { AppDispatch } from "../index";

enum ActionType {
  RECEIVE_NOW = "now/receive",
  CLEAR_NOW = "now/clear",
  SET_LOADING = "loading/set",
  SET_ERROR = "error/set",
}

export type NowAction =
  | { type: ActionType.RECEIVE_NOW; payload: { now: AnimeList } }
  | { type: ActionType.CLEAR_NOW }
  | { type: ActionType.SET_LOADING; payload: boolean }
  | { type: ActionType.SET_ERROR; payload: string | null };

function receiveNowActionCreator(now: AnimeList) {
  return {
    type: ActionType.RECEIVE_NOW,
    payload: {
      now,
    },
  };
}

function clearNowActionCreator() {
  return {
    type: ActionType.CLEAR_NOW,
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

function asyncReceiveNow(params?: { page?: number; sfw?: boolean }) {
  return async (dispatch: AppDispatch) => {
    dispatch(clearNowActionCreator());
    dispatch(setLoadingActionCreator(true));
    dispatch(setErrorActionCreator(null));

    try {
      const now = await api.getSeasonNow({ ...params });
      dispatch(receiveNowActionCreator(now));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching now anime:", error);
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

export { ActionType, asyncReceiveNow, receiveNowActionCreator };
