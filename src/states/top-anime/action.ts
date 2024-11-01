// types
import { AnimeList } from "../../types/anime.type";
// utils
import api from "../../utils/api";
// states
import { AppDispatch } from "../index";

enum ActionType {
  RECEIVE_TOP_ANIME = "top-anime/receive",
  CLEAR_TOP_ANIME = "top-anime/clear",
}

export type TopAnimeAction =
  | { type: ActionType.RECEIVE_TOP_ANIME; payload: { topAnime: AnimeList } }
  | { type: ActionType.CLEAR_TOP_ANIME };

function receiveTopAnimeActionCreator(topAnime: AnimeList) {
  return {
    type: ActionType.RECEIVE_TOP_ANIME,
    payload: {
      topAnime,
    },
  };
}

function clearTopAnimeActionCreator() {
  return {
    type: ActionType.CLEAR_TOP_ANIME,
  };
}

function asyncReceiveTopAnime(page?: number) {
  return async (dispatch: AppDispatch) => {
    dispatch(clearTopAnimeActionCreator());

    try {
      const topAnime = await api.getTopAnime(page);
      dispatch(receiveTopAnimeActionCreator(topAnime));
    } catch (error) {
      console.error("Error fetching top anime:", error);
      // dispatch(receiveTopAnimeActionCreator({ error: error.message }));
    }
  };
}

export { ActionType, asyncReceiveTopAnime, receiveTopAnimeActionCreator };
