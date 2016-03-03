import * as ActionTypes from '../constants/ActionTypes';

import dataset1 from '../data/dataset1.csv';
import master from '../data/master.csv';

const initialState = {
  datasets: [{
    name: 'dataset',
    data: dataset1
  }],
  master
};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FOO:
      return state;
    default:
      return state;
  }
}
