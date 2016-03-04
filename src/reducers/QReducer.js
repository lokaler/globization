import * as ActionTypes from '../constants/ActionTypes';
import objectAssign from 'object-assign';

const initialState = {
  activeChapter: 0,
  activeCard: 0,
  userInput: {},
  questionData: []
};

function structureData(el) {
  const key = Object.keys(el)[0];
  const cleanData = { type: key, data: el[key] };

  switch (key) {
    case 'text': {
      cleanData.data = el.text.join('\n'); break;
    }
    case 'input': {
      cleanData.type = el.input.type;
      cleanData.key = el.input.key;
      break;
    }
    default: {
      // nothing to do here
    }
  }

  return cleanData;
}

function createNewUserInput(state, key, value) {
  return objectAssign({}, state.userInput, { [key]: value });
}

export default function questions(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_QUESTION_DATA: {
      const questionData = action.data.map(structureData);
      return objectAssign({}, state, { questionData });
    }
    case ActionTypes.UPDATE_USERINPUT: {
      const newUserInput = createNewUserInput(state, action.key, action.value);
      return objectAssign({}, state, { userInput: newUserInput });
    }
    case ActionTypes.LOADING_QUESTION_DATA:
      return state;
    default:
      return state;
  }
}
