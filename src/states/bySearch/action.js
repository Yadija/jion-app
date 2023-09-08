import api from '../../utils/api';

const ActionType = {
  RECEIVE_BY_SEARCH: 'RECEIVE_BY_SEARCH',
  CLEAR_BY_SEARCH: 'CLEAR_BY_SEARCH',
};

function receiveBySearchActionCreator(bySearch) {
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

function asyncReceiveBySearch(type, queryParams) {
  return async (dispatch) => {
    dispatch(clearBySearchActionCreator());

    try {
      const bySearch = await api.getBySearch(type, queryParams);
      dispatch(receiveBySearchActionCreator(bySearch));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { ActionType, asyncReceiveBySearch, receiveBySearchActionCreator };
