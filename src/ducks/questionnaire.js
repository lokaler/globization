const LOAD_QUESTIONNAIRES = 'LOAD_QUESTIONNAIRES';
const SET_QUESTIONNAIRE = 'SET_QUESTIONNAIRE';
const SET_CARD = 'SET_CARD';
const UPDATE_USERINPUT = 'UPDATE_USERINPUT';

const initialState = {
  questionnaires: {},
  activeQuestionnaireId: null,
  activeCard: -1,
  inputValues: {},
  questionData: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {

    case LOAD_QUESTIONNAIRES: {
      return {
        ...state,
        questionnaires: action.data
      };
    }

    case SET_QUESTIONNAIRE: {
      const questionData = state.questionnaires[action.id].data;
      const options = state.questionnaires[action.id].options;
      return {
        ...state,
        activeQuestionnaireId: action.id,
        activeCard: -1,
        inputValues: {},
        questionData,
        options
      };
    }

    case UPDATE_USERINPUT:
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          [action.key]: action.value
        }
      };

    case SET_CARD:
      return {
        ...state,
        activeCard: action.index
      };

    default:
      return state;
  }
}

export const actions = {

  loadQuestionnaires: (data) => ({ type: LOAD_QUESTIONNAIRES, data }),
  setQuestionnaire: (id) => ({ type: SET_QUESTIONNAIRE, id }),
  updateUserInput: (key, value) => ({ type: UPDATE_USERINPUT, key, value }),
  setCard(index, dataId) {
    return dispatch => {
      if (dataId) {
        // dispatch(setDataSet(dataId));
      }
      // dispatch(changeVis({ active: null, tooltip: { active: false } }));
      dispatch({ type: SET_CARD, index });
    };
  }
};
