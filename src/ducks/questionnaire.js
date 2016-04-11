const LOAD_QUESTIONNAIRES = 'LOAD_QUESTIONNAIRES';
const SET_QUESTIONNAIRE = 'SET_QUESTIONNAIRE';
const SET_CARD = 'SET_CARD';
const UPDATE_USERINPUT = 'UPDATE_USERINPUT';

const initialState = {
  error: null,
  questionnaires: {},
  activeQuestionnaireId: null,
  activeCard: -1,
  inputValues: {},
  cards: []
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
      const questionnaires = state.questionnaires;

      if (questionnaires.error) {
        return {
          ...state,
          error: questionnaires.error
        };
      }

      const questionnaireId = action.questionnaireId;
      const questionnaire = questionnaires[questionnaireId];

      return {
        ...state,
        error: null,
        activeQuestionnaireId: questionnaireId,
        // activeCard: -1,
        // inputValues: {},
        cards: questionnaire.cards,
        options: questionnaire.options
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
  setQuestionnaire: (questionnaireId) => ({ type: SET_QUESTIONNAIRE, questionnaireId }),
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
