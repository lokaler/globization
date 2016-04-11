import { prepareDataset } from 'logic/datasets';

const RECEIVE_DATASETS = 'RECEIVE_DATASETS';
const SET_DATASET = 'SET_DATASET';

const initialState = {
  round: 'konsum',
  dataset: null,
  datasets: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {

    case RECEIVE_DATASETS: {
      action.data.forEach(prepareDataset.bind(state));
      return {
        ...state,
        dataset: action.data[0],
        datasets: action.data
      };
    }

    case SET_DATASET: {
      const newDataSet = state.datasets.filter((d) => d.key === action.name)[0];
      return {
        ...state,
        dataset: newDataSet
      };
    }

    default:
      return state;
  }
}

function receiveDataSets(jsonData) {
  return { type: RECEIVE_DATASETS, data: jsonData };
}

function requestDataSets(url) {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(jsonData => {
        dispatch(receiveDataSets(jsonData));
      })
      .catch((err) => {
        console.error(err); // eslint-disable-line no-console
      });
  };
}

export const actions = {
  receiveDataSets,
  requestDataSets,
  setDataSet: (name) => (
  { type: SET_DATASET, name }
  )
};
