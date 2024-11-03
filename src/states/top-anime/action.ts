// types
import { AnimeList } from "../../types/anime.type";
// utils
import api from "../../utils/api";
// states
import { AppDispatch } from "../index";

enum ActionType {
  RECEIVE_TOP_ANIME = "top-anime/receive",
  CLEAR_TOP_ANIME = "top-anime/clear",
  SET_LOADING = "loading/set",
  SET_ERROR = "error/set",
}

export type TopAnimeAction =
  | { type: ActionType.RECEIVE_TOP_ANIME; payload: { topAnime: AnimeList } }
  | { type: ActionType.CLEAR_TOP_ANIME }
  | { type: ActionType.SET_LOADING; payload: boolean }
  | { type: ActionType.SET_ERROR; payload: string | null };

function receiveTopAnimeActionCreator(topAnime: AnimeList) {
  return {
    type: ActionType.RECEIVE_TOP_ANIME,
    payload: {
      topAnime,
    },
  };
}

function clearTopAnimeActionCreator() {
  return {
    type: ActionType.CLEAR_TOP_ANIME,
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

function asyncReceiveTopAnime(params?: { page?: number; sfw?: boolean }) {
  return async (dispatch: AppDispatch) => {
    dispatch(clearTopAnimeActionCreator());
    dispatch(setLoadingActionCreator(true));
    dispatch(setErrorActionCreator(null));

    try {
      const topAnime = await api.getTopAnime({ ...params });
      dispatch(receiveTopAnimeActionCreator(topAnime));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching top anime:", error);
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

export { ActionType, asyncReceiveTopAnime, receiveTopAnimeActionCreator };
