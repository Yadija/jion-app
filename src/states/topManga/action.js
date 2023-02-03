import api from '../../utils/api';

const ActionType = {
  RECEIVE_TOP_MANGA: 'RECEIVE_TOP_MANGA',
  CLEAR_TOP_MANGA: 'CLEAR_TOP_MANGA',
};

function receiveTopMangaActionCreator(topManga) {
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

function asyncReceiveTopManga(page) {
  return async (dispatch) => {
    dispatch(clearTopMangaActionCreator());

    try {
      const now = await api.getTopManga(page);
      dispatch(receiveTopMangaActionCreator(now));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { ActionType, receiveTopMangaActionCreator, asyncReceiveTopManga };
