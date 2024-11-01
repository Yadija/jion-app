// types
import { AnimeList } from "../../types/anime.type";
import { MangaList } from "../../types/manga.type";
// utils
import api from "../../utils/api";
// states
import { AppDispatch } from "../index";

enum ActionType {
  RECEIVE_BY_SEARCH = "by-search/receive",
  CLEAR_BY_SEARCH = "by-search/clear",
  SET_LOADING = "loading/set",
  SET_ERROR = "error/set",
}

export type BySearchAction =
  | {
      type: ActionType.RECEIVE_BY_SEARCH;
      payload: {
        bySearch: AnimeList | MangaList;
      };
    }
  | {
      type: ActionType.CLEAR_BY_SEARCH;
    }
  | { type: ActionType.SET_LOADING; payload: boolean }
  | { type: ActionType.SET_ERROR; payload: string | null };

function receiveBySearchActionCreator(bySearch: AnimeList | MangaList) {
  return {
    type: ActionType.RECEIVE_BY_SEARCH,
    payload: {
      bySearch,
    },
  };
}

function clearBySearchActionCreator() {
  return {
    type: ActionType.CLEAR_BY_SEARCH,
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

function asyncReceiveBySearch(
  type: string,
  queryParams: { query: string; page: number },
) {
  return async (dispatch: AppDispatch) => {
    dispatch(clearBySearchActionCreator());
    dispatch(setLoadingActionCreator(true));
    dispatch(setErrorActionCreator(null));

    try {
      const bySearch = await api.getBySearch(type, queryParams);
      dispatch(receiveBySearchActionCreator(bySearch));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching by search:", error);
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

export { ActionType, asyncReceiveBySearch, receiveBySearchActionCreator };
