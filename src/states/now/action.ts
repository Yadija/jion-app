// types
import { AnimeList } from "../../types/anime.type";
// utils
import api from "../../utils/api";
// states
import { AppDispatch } from "../index";

enum ActionType {
  RECEIVE_NOW = "now/receive",
  CLEAR_NOW = "now/clear",
}

export type NowAction =
  | { type: ActionType.RECEIVE_NOW; payload: { now: AnimeList } }
  | { type: ActionType.CLEAR_NOW };

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

function asyncReceiveNow(page?: number) {
  return async (dispatch: AppDispatch) => {
    dispatch(clearNowActionCreator());

    try {
      const now = await api.getSeasonNow(page);
      dispatch(receiveNowActionCreator(now));
    } catch (error) {
      console.error("Error fetching now anime:", error);
      // dispatch(receiveNowActionCreator({ error: error.message }));
    }
  };
}

export { ActionType, asyncReceiveNow, receiveNowActionCreator };
