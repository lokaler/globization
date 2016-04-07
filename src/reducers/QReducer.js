import * as ActionTypes from '../constants/ActionTypes';
import objectAssign from 'object-assign';
import { flatten } from 'lodash';

const initialState = {
  activeChapter: 0,
  activeCard: -1,
  inputs: {},
  questionData: [],
};

// hotfix
function createInputs(data) {
  const inputs = {};
  const contents = data.map((el) => el.content);
  const content = flatten(contents);

  content.filter(el => Object.keys(el)[0] === 'input')
    .forEach(el => {
      inputs[el.input.key] = {};
      inputs[el.input.key].value = undefined;
    });

  return inputs;
}

function createNewUserInput(state, key, value) {
  return objectAssign({}, state.inputs, { [key]: { value } });
}

export default function questions(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_QUESTION_DATA: {
      const inputs = createInputs(action.data);
      const questionData = action.data;
      return objectAssign({}, state, { questionData, inputs });
    }
    case ActionTypes.UPDATE_USERINPUT: {
      const newUserInput = createNewUserInput(state, action.key, action.value);
      return objectAssign({}, state, { inputs: newUserInput });
    }
    case ActionTypes.LOADING_QUESTION_DATA:
      return state;
    case ActionTypes.SET_CARD:
      return objectAssign({}, state, { activeCard: action.index });
    default:
      return state;
  }
}
