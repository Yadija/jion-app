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
}

export type DetailAction =
  | {
      type: ActionType.RECEIVE_DETAIL;
      payload: { detail: AnimeDetail | MangaDetail };
    }
  | { type: ActionType.CLEAR_DETAIL };

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

function asyncReceiveDetail(type: string, id: number) {
  return async (dispatch: AppDispatch) => {
    dispatch(clearDetailActionCreator());

    try {
      const detail = await api.getDetail(type, id);
      dispatch(receiveDetailActionCreator(detail as AnimeDetail | MangaDetail));
    } catch (error) {
      console.error("Error fetching detail:", error);
      // dispatch(receiveDetailActionCreator({ error: error.message }));
    }
  };
}

export { ActionType, asyncReceiveDetail, receiveDetailActionCreator };
