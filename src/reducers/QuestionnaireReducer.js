import {
  RECEIVE_QUESTION_DATA, UPDATE_USERINPUT, LOADING_QUESTION_DATA, SET_CARD
} from '../constants/ActionTypes';

const initialState = {
  activeChapter: 0,
  activeCard: -1,
  inputValues: {},
  questionData: [],
};

export default function questions(state = initialState, action) {
  switch (action.type) {

    case RECEIVE_QUESTION_DATA: {
      const questionData = action.data;
      return {
        ...state,
        questionData,
        inputValues: {}
      };
    }

    case UPDATE_USERINPUT: {
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          [action.key]: action.value
        }
      };
    }

    case SET_CARD:
      return {
        ...state,
        activeCard: action.index
      };

    case LOADING_QUESTION_DATA:
      return state;

    default:
      return state;
  }
}
