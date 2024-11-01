// types
import { MangaList } from "../../types/manga.type";
// utils
import api from "../../utils/api";
// states
import { AppDispatch } from "../index";

enum ActionType {
  RECEIVE_TOP_MANGA = "top-manga/receive",
  CLEAR_TOP_MANGA = "top-manga/clear",
}

export type TopMangaAction =
  | { type: ActionType.RECEIVE_TOP_MANGA; payload: { topManga: MangaList } }
  | { type: ActionType.CLEAR_TOP_MANGA };

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

function asyncReceiveTopManga(page?: number) {
  return async (dispatch: AppDispatch) => {
    dispatch(clearTopMangaActionCreator());

    try {
      const topManga = await api.getTopManga(page);
      dispatch(receiveTopMangaActionCreator(topManga));
    } catch (error) {
      console.error("Error fetching top manga:", error);
      // dispatch(receiveTopMangaActionCreator({ error: error.message }));
    }
  };
}

export { ActionType, asyncReceiveTopManga, receiveTopMangaActionCreator };
