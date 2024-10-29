import api from "../../utils/api";

const ActionType = {
  RECEIVE_PRODUCERS: "RECEIVE_PRODUCERS",
  CLEAR_PRODUCERS: "CLEAR_PRODUCERS",
};

function receiveProducersActionCreator(producers) {
  return {
    type: ActionType.RECEIVE_PRODUCERS,
    payload: {
      producers,
    },
  };
}

function clearProducersActionCreator() {
  return {
    type: ActionType.CLEAR_PRODUCERS,
  };
}

function asyncReceiveProducers(page) {
  return async (dispatch) => {
    dispatch(clearProducersActionCreator());

    try {
      const producers = await api.getProducers(page);
      dispatch(receiveProducersActionCreator(producers));
    } catch (error) {
      dispatch(receiveProducersActionCreator({ error: error.message }));
    }
  };
}

export { ActionType, asyncReceiveProducers, receiveProducersActionCreator };
