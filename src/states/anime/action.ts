// types
import { AnimeList } from "../../types/anime.type";
// utils
import api from "../../utils/api";
// states
import { AppDispatch } from "../index";

enum ActionType {
  RECEIVE_ANIME = "anime/receive",
  CLEAR_ANIME = "anime/clear",
  SET_LOADING = "loading/set",
  SET_ERROR = "error/set",
}

export type AnimeAction =
  | {
      type: ActionType.RECEIVE_ANIME;
      payload: {
        anime: AnimeList;
      };
    }
  | {
      type: ActionType.CLEAR_ANIME;
    }
  | { type: ActionType.SET_LOADING; payload: boolean }
  | { type: ActionType.SET_ERROR; payload: string | null };

function receiveAnimeActionCreator(anime: AnimeList) {
  return {
    type: ActionType.RECEIVE_ANIME,
    payload: {
      anime,
    },
  };
}

function clearAnimeActionCreator() {
  return {
    type: ActionType.CLEAR_ANIME,
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

function asyncReceiveAnime(params: {
  query?: string;
  page?: number;
  sfw?: boolean;
}) {
  return async (dispatch: AppDispatch) => {
    dispatch(clearAnimeActionCreator());
    dispatch(setLoadingActionCreator(true));
    dispatch(setErrorActionCreator(null));

    try {
      const anime = await api.getAnime(params);
      dispatch(receiveAnimeActionCreator(anime));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching anime:", error);
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

export { ActionType, asyncReceiveAnime, receiveAnimeActionCreator };
