// lib
import api from "@/lib/api";
// states
import { AppDispatch } from "@/states";
// types
import { MangaList } from "@/types/manga.type";

enum ActionType {
  RECEIVE_MANGA = "manga/receive",
  CLEAR_MANGA = "manga/clear",
  SET_LOADING = "loading/set",
  SET_ERROR = "error/set",
}

export type MangaAction =
  | {
      type: ActionType.RECEIVE_MANGA;
      payload: {
        manga: MangaList;
      };
    }
  | {
      type: ActionType.CLEAR_MANGA;
    }
  | { type: ActionType.SET_LOADING; payload: boolean }
  | { type: ActionType.SET_ERROR; payload: string | null };

function receiveMangaActionCreator(manga: MangaList) {
  return {
    type: ActionType.RECEIVE_MANGA,
    payload: {
      manga,
    },
  };
}

function clearMangaActionCreator() {
  return {
    type: ActionType.CLEAR_MANGA,
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

function asyncReceiveManga(params?: {
  query?: string;
  page?: number;
  sfw?: boolean;
}) {
  return async (dispatch: AppDispatch) => {
    dispatch(clearMangaActionCreator());
    dispatch(setLoadingActionCreator(true));
    dispatch(setErrorActionCreator(null));

    try {
      const manga = await api.getManga({ ...params });
      dispatch(receiveMangaActionCreator(manga));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching manga:", error);
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

export { ActionType, asyncReceiveManga, receiveMangaActionCreator };
