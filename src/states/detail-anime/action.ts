// lib
import api from "@/lib/api";
// states
import { AppDispatch } from "@/states";
// types
import { AnimeDetail } from "@/types/anime.type";

enum ActionType {
  RECEIVE_DETAIL_ANIME = "detail-anime/receive",
  CLEAR_DETAIL_ANIME = "detail-anime/clear",
  SET_LOADING = "loading/set",
  SET_ERROR = "error/set",
}

export type DetailAnimeAction =
  | {
      type: ActionType.RECEIVE_DETAIL_ANIME;
      payload: { detail: AnimeDetail };
    }
  | { type: ActionType.CLEAR_DETAIL_ANIME }
  | { type: ActionType.SET_LOADING; payload: boolean }
  | { type: ActionType.SET_ERROR; payload: string | null };

function receiveDetailAnimeActionCreator(detail: AnimeDetail) {
  return {
    type: ActionType.RECEIVE_DETAIL_ANIME,
    payload: {
      detail,
    },
  };
}

function clearDetailAnimeActionCreator() {
  return {
    type: ActionType.CLEAR_DETAIL_ANIME,
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

function asyncReceiveDetailAnime(id: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(clearDetailAnimeActionCreator());
    dispatch(setLoadingActionCreator(true));
    dispatch(setErrorActionCreator(null));

    try {
      const detail = await api.getDetailAnime(id);
      dispatch(receiveDetailAnimeActionCreator(detail));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching detail anime:", error);
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

export { ActionType, asyncReceiveDetailAnime, receiveDetailAnimeActionCreator };
