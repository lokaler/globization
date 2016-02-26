import { LOADING_QUESTION_DATA, RECEIVE_QUESTION_DATA } from '../constants/ActionTypes';
import objectAssign from 'object-assign';

const initialState = {
  questionData: [],
  mapData: []
};

function restructureData(el) {
  const key = Object.keys(el)[0];
  const cleanData = { type: key, data: { } };

  switch (key) {
    case 'text': {
      cleanData.data = el.text.join('\n'); break;
    }
    case 'input': {
      cleanData.type = el.input.type;
    }
    default: {
      cleanData.data = el[key];
    }
  }

  return cleanData;
}

export default function appState(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_QUESTION_DATA: {
      const questionData = action.data.map(restructureData);
      return objectAssign({}, state, { questionData });
    }
    case LOADING_QUESTION_DATA:
      return state;
    default:
      return state;
  }
}
