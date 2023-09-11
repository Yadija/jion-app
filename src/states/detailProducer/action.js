import api from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_PRODUCER: 'RECEIVE_DETAIL_PRODUCER',
  CLEAR_DETAIL_PRODUCER: 'CLEAR_DETAIL_PRODUCER',
};

function receiveDetailProducerActionCreator(detailProducer) {
  return {
    type: ActionType.RECEIVE_DETAIL_PRODUCER,
    payload: {
      detailProducer,
    },
  };
}

function clearDetailProducerActionCreator() {
  return {
    type: ActionType.CLEAR_DETAIL_PRODUCER,
  };
}

function asyncReceiveDetailProducer(type, id) {
  return async (dispatch) => {
    dispatch(clearDetailProducerActionCreator());

    try {
      const detailProducer = await api.getDetail(type, id);
      dispatch(receiveDetailProducerActionCreator(detailProducer));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { ActionType, asyncReceiveDetailProducer, receiveDetailProducerActionCreator };
