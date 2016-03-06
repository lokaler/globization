import * as ActionTypes from '../constants/ActionTypes';
import objectAssign from 'object-assign';

const initialState = {
  activeChapter: 0,
  activeCard: 0,
  inputs: {},
  questionData: []
};

function createKey(type, index) {
  return `${+new Date()}_${index}_${type}`;
}

function structureData(card) {
  return card.content.map((el, index) => {
    const key = Object.keys(el)[0];
    const cleanData = { type: key, data: el[key] };

    switch (key) {
      case 'text': {
        cleanData.data = el.text.join('\n');
        cleanData.key = createKey(cleanData.type, index);
        break;
      }
      case 'input': {
        cleanData.type = el.input.type;
        cleanData.key = el.input.key;
        break;
      }
      case 'answer': {
        for (const templateKey in el.answer.templates) {
          if (typeof el.answer.templates[templateKey] !== 'undefined') {
            cleanData.data.templates[templateKey] = el.answer.templates[templateKey].join('\n');
          }
        }
        cleanData.key = createKey(cleanData.type, index);
        break;
      }
      default: {
        // nothing to do here
      }
    }

    return cleanData;
  });
}

function createNewUserInput(state, key, value) {
  return objectAssign({}, state.inputs, { [key]: { value } });
}

export default function questions(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_QUESTION_DATA: {
      const questionData = action.data.map(structureData);
      return objectAssign({}, state, { questionData });
    }
    case ActionTypes.UPDATE_USERINPUT: {
      const newUserInput = createNewUserInput(state, action.key, action.value);
      return objectAssign({}, state, { inputs: newUserInput });
    }
    case ActionTypes.LOADING_QUESTION_DATA:
      return state;
    default:
      return state;
  }
}
