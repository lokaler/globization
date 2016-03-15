import * as ActionTypes from '../constants/ActionTypes';
import objectAssign from 'object-assign';

const initialState = {
  activeChapter: 0,
  activeCard: -1,
  inputs: {},
  questionData: []
};

function createKey(type, index) {
  return `${+new Date()}_${index}_${type}`;
}

function structureData(card) {
  const items = [];

  items.push({ type: 'functions', data: card.functions });
  items.push({ type: 'dataset', data: card.dataset });

  const content = card.content.map((el, index) => {
    const key = Object.keys(el)[0];
    const cleanData = { type: key, data: el[key] };

    switch (key) {
      case 'text': {
        cleanData.data = {
          de: el.text.de.join('\n'),
          en: el.text.en.join('\n')
        };
        cleanData.key = createKey(cleanData.type, index);
        break;
      }
      case 'input': {
        cleanData.type = el.input.type;
        cleanData.key = el.input.key;
        break;
      }
      case 'answer': {
        const templates = el.answer.templates;
        for (const templateKey in templates) {
          if (typeof templates[templateKey] !== 'undefined') {
            cleanData.data.templates[templateKey].de = templates[templateKey].de.join('\n');
            cleanData.data.templates[templateKey].en = templates[templateKey].en.join('\n');
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

  return [...items, ...content];
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
    case ActionTypes.SET_CARD:
      return objectAssign({}, state, { activeCard: action.index });
    default:
      return state;
  }
}
