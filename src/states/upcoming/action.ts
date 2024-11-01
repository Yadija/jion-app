// types
import { AnimeList } from "../../types/anime.type";
// utils
import api from "../../utils/api";
// states
import { AppDispatch } from "../index";

enum ActionType {
  RECEIVE_UPCOMING = "upcoming/receive",
  CLEAR_UPCOMING = "upcoming/clear",
}

export type UpcomingAction =
  | { type: ActionType.RECEIVE_UPCOMING; payload: { upcoming: AnimeList } }
  | { type: ActionType.CLEAR_UPCOMING };

const receiveUpcomingActionCreator = (upcoming: AnimeList) => ({
  type: ActionType.RECEIVE_UPCOMING,
  payload: { upcoming },
});

const clearUpcomingActionCreator = () => ({
  type: ActionType.CLEAR_UPCOMING,
});

const asyncReceiveUpcoming = (page?: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(clearUpcomingActionCreator());

    try {
      const upcoming = await api.getSeasonUpcoming(page);
      dispatch(receiveUpcomingActionCreator(upcoming));
    } catch (error) {
      console.error("Error fetching upcoming anime:", error);
      // dispatch(receiveUpcomingActionCreator({ error: error.message }));
    }
  };
};

export { ActionType, asyncReceiveUpcoming, receiveUpcomingActionCreator };
