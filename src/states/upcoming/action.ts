// lib
import api from "@/lib/api";
// states
import { AppDispatch } from "@/states";
// types
import { AnimeList } from "@/types/anime.type";

enum ActionType {
  RECEIVE_UPCOMING = "upcoming/receive",
  CLEAR_UPCOMING = "upcoming/clear",
  SET_LOADING = "loading/set",
  SET_ERROR = "error/set",
}

export type UpcomingAction =
  | { type: ActionType.RECEIVE_UPCOMING; payload: { upcoming: AnimeList } }
  | { type: ActionType.CLEAR_UPCOMING }
  | { type: ActionType.SET_LOADING; payload: boolean }
  | { type: ActionType.SET_ERROR; payload: string | null };

const receiveUpcomingActionCreator = (upcoming: AnimeList) => ({
  type: ActionType.RECEIVE_UPCOMING,
  payload: {
    upcoming,
  },
});

const clearUpcomingActionCreator = () => ({
  type: ActionType.CLEAR_UPCOMING,
});

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

const asyncReceiveUpcoming = (params?: { page?: number; sfw?: boolean }) => {
  return async (dispatch: AppDispatch) => {
    dispatch(clearUpcomingActionCreator());
    dispatch(setLoadingActionCreator(true));
    dispatch(setErrorActionCreator(null));

    try {
      const upcoming = await api.getSeasonUpcoming({ ...params });
      dispatch(receiveUpcomingActionCreator(upcoming));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching upcoming anime:", error);
        dispatch(setErrorActionCreator(error.message));
      } else {
        console.error("Unknown error:", error);
        dispatch(setErrorActionCreator("An unknown error occurred"));
      }
    } finally {
      dispatch(setLoadingActionCreator(false));
    }
  };
};

export { ActionType, asyncReceiveUpcoming, receiveUpcomingActionCreator };
