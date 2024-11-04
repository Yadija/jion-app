// lib
import api from "@/lib/api";
// states
import { AppDispatch } from "@/states";
// types
import { AnimeDetail } from "@/types/anime.type";
import { MangaDetail } from "@/types/manga.type";

enum ActionType {
  RECEIVE_DETAIL_MANGA = "detail-manga/receive",
  CLEAR_DETAIL_MANGA = "detail-manga/clear",
  SET_LOADING = "loading/set",
  SET_ERROR = "error/set",
}

export type DetailMangaAction =
  | {
      type: ActionType.RECEIVE_DETAIL_MANGA;
      payload: { detail: MangaDetail };
    }
  | { type: ActionType.CLEAR_DETAIL_MANGA }
  | { type: ActionType.SET_LOADING; payload: boolean }
  | { type: ActionType.SET_ERROR; payload: string | null };

function receiveDetailMangaActionCreator(detail: AnimeDetail | MangaDetail) {
  return {
    type: ActionType.RECEIVE_DETAIL_MANGA,
    payload: {
      detail,
    },
  };
}

function clearDetailMangaActionCreator() {
  return {
    type: ActionType.CLEAR_DETAIL_MANGA,
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

function asyncReceiveDetailManga(id: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(clearDetailMangaActionCreator());
    dispatch(setLoadingActionCreator(true));
    dispatch(setErrorActionCreator(null));

    try {
      const detail = await api.getDetailManga(id);
      dispatch(receiveDetailMangaActionCreator(detail));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching detail manga:", error);
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

export { ActionType, asyncReceiveDetailManga, receiveDetailMangaActionCreator };
