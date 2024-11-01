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
    };

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

function asyncReceiveBySearch(
  type: string,
  queryParams: { query: string; page: number },
) {
  return async (dispatch: AppDispatch) => {
    dispatch(clearBySearchActionCreator());

    try {
      const bySearch = await api.getBySearch(type, queryParams);
      dispatch(receiveBySearchActionCreator(bySearch));
    } catch (error) {
      console.error("Error fetching by search:", error);
      // dispatch(receiveBySearchActionCreator({ error: error.message }));
    }
  };
}

export { ActionType, asyncReceiveBySearch, receiveBySearchActionCreator };
