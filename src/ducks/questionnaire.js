import { actions as visualizationActions } from './visualization';


const LOAD_QUESTIONNAIRES = 'LOAD_QUESTIONNAIRES';
const SET_QUESTIONNAIRE = 'SET_QUESTIONNAIRE';
const RESET_QUESTIONNAIRE = 'RESET_QUESTIONNAIRE';
const SET_CARD = 'SET_CARD';
const SUBMIT_CARD = 'SUBMIT_CARD';
const UPDATE_USERINPUT = 'UPDATE_USERINPUT';
const SET_DATASET = 'SET_DATASET';

const initialState = {
  validationError: null,
  questionnaires: {},
  activeQuestionnaireId: '0416',
  activeCard: 0,
  inputValues: {},
  cards: [],
  submittedCards: {}
};

export function reducer(state = initialState, action) {
  switch (action.type) {

    case LOAD_QUESTIONNAIRES: {
      const questionnaires = action.data;

      if (questionnaires.validationError) {
        return {
          ...state,
          validationError: questionnaires.validationError,
          questionnaires: {}
        };
      }

      return {
        ...state,
        validationError: null,
        questionnaires
      };
    }

    case SET_QUESTIONNAIRE: {
      if (state.validationError) {
        return state;
      }

      const questionnaires = state.questionnaires;
      const questionnaireId = action.questionnaireId;
      const questionnaire = questionnaires[questionnaireId];

      return {
        ...state,
        validationError: null,
        activeQuestionnaireId: questionnaireId,
        cards: questionnaire.cards,
        datasets: questionnaire.datasets,
        dataset: questionnaire.datasets[0],
        options: questionnaire.options
      };
    }

    case RESET_QUESTIONNAIRE: {
      return {
        ...state,
        activeCard: 0,
        inputValues: {},
        submittedCards: {}
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

    case SET_DATASET: {
      const newDataSet = state.datasets.filter((d) => d.key === action.name)[0];
      return {
        ...state,
        dataset: newDataSet
      };
    }

    case SUBMIT_CARD: {
      return {
        ...state,
        submittedCards: {
          ...state.submittedCards,
          [action.cardKey]: true
        }
      };
    }

    default:
      return state;
  }
}

const setDataSet = (name) => ({ type: SET_DATASET, name });

export const actions = {

  loadQuestionnaires: (data) => ({ type: LOAD_QUESTIONNAIRES, data }),

  setQuestionnaire: (questionnaireId) => ({ type: SET_QUESTIONNAIRE, questionnaireId }),

  resetQuestionnaire: () => ({ type: RESET_QUESTIONNAIRE }),

  updateUserInput: (key, value) => ({ type: UPDATE_USERINPUT, key, value }),

  setCard(index, datasetId) {
    return dispatch => {
      if (datasetId) {
        dispatch(setDataSet(datasetId));
      }
      dispatch(visualizationActions.changeVis({ active: null, tooltip: { active: false } }));
      dispatch({ type: SET_CARD, index });
    };
  },

  setDataSet,

  quizSubmitCard: (cardKey) => ({ type: SUBMIT_CARD, cardKey })

};