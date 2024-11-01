// types
import { AnimeDetail } from "../../types/anime.type";
import { MangaDetail } from "../../types/manga.type";
// utils
import api from "../../utils/api";
// states
import { AppDispatch } from "..";

enum ActionType {
  RECEIVE_DETAIL = "detail/receive",
  CLEAR_DETAIL = "detail/clear",
  SET_LOADING = "loading/set",
  SET_ERROR = "error/set",
}

export type DetailAction =
  | {
      type: ActionType.RECEIVE_DETAIL;
      payload: { detail: AnimeDetail | MangaDetail };
    }
  | { type: ActionType.CLEAR_DETAIL }
  | { type: ActionType.SET_LOADING; payload: boolean }
  | { type: ActionType.SET_ERROR; payload: string | null };

function receiveDetailActionCreator(detail: AnimeDetail | MangaDetail) {
  return {
    type: ActionType.RECEIVE_DETAIL,
    payload: {
      detail,
    },
  };
}

function clearDetailActionCreator() {
  return {
    type: ActionType.CLEAR_DETAIL,
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

function asyncReceiveDetail(type: string, id: number) {
  return async (dispatch: AppDispatch) => {
    dispatch(clearDetailActionCreator());
    dispatch(setLoadingActionCreator(true));
    dispatch(setErrorActionCreator(null));

    try {
      const detail = await api.getDetail(type, id);
      dispatch(receiveDetailActionCreator(detail as AnimeDetail | MangaDetail));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching detail:", error);
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

export { ActionType, asyncReceiveDetail, receiveDetailActionCreator };
