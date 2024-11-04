// lib
import api from "@/lib/api";
// states
import { AppDispatch } from "@/states";
// types
import { MangaList } from "@/types/manga.type";

enum ActionType {
  RECEIVE_TOP_MANGA = "top-manga/receive",
  CLEAR_TOP_MANGA = "top-manga/clear",
  SET_LOADING = "loading/set",
  SET_ERROR = "error/set",
}

export type TopMangaAction =
  | { type: ActionType.RECEIVE_TOP_MANGA; payload: { topManga: MangaList } }
  | { type: ActionType.CLEAR_TOP_MANGA }
  | { type: ActionType.SET_LOADING; payload: boolean }
  | { type: ActionType.SET_ERROR; payload: string | null };

function receiveTopMangaActionCreator(topManga: MangaList) {
  return {
    type: ActionType.RECEIVE_TOP_MANGA,
    payload: {
      topManga,
    },
  };
}

function clearTopMangaActionCreator() {
  return {
    type: ActionType.CLEAR_TOP_MANGA,
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

function asyncReceiveTopManga(params?: { page?: number }) {
  return async (dispatch: AppDispatch) => {
    dispatch(clearTopMangaActionCreator());
    dispatch(setLoadingActionCreator(true));
    dispatch(setErrorActionCreator(null));

    try {
      const topManga = await api.getTopManga({ ...params });
      dispatch(receiveTopMangaActionCreator(topManga));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching top manga:", error);
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

export { ActionType, asyncReceiveTopManga, receiveTopMangaActionCreator };
