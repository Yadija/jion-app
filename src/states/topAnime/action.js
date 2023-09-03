import api from '../../utils/api';

const ActionType = {
  RECEIVE_TOP_ANIME: 'RECEIVE_TOP_ANIME',
  CLEAR_TOP_ANIME: 'CLEAR_TOP_ANIME',
};

function receiveTopAnimeActionCreator(topAnime) {
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

function asyncReceiveTopAnime(page) {
  return async (dispatch) => {
    dispatch(clearTopAnimeActionCreator());

    try {
      const now = await api.getTopAnime(page);
      dispatch(receiveTopAnimeActionCreator(now));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { ActionType, asyncReceiveTopAnime, receiveTopAnimeActionCreator };
