import { includes, clamp } from 'lodash';

import { actions as visualizationActions } from './visualization';

import { GET_URL_PARAMETERS, GET_STORED_VALUES } from './app';
const LOAD_QUESTIONNAIRES = 'LOAD_QUESTIONNAIRES';
const SET_QUESTIONNAIRE = 'SET_QUESTIONNAIRE';
const RESET_QUESTIONNAIRE = 'RESET_QUESTIONNAIRE';
const SET_CARD = 'SET_CARD';
const SUBMIT_CARD = 'SUBMIT_CARD';
const UPDATE_USERINPUT = 'UPDATE_USERINPUT';
const SET_DATASET = 'SET_DATASET';
const SET_DEBUG_EXPRESSIONS = 'SET_DEBUG_EXPRESSIONS';


const FETCH_HISTOGRAM_DATA = 'FETCH_HISTOGRAM_DATA';
const ERROR_HISTOGRAM_DATA = 'ERROR_HISTOGRAM_DATA';

const initialState = {
  validationError: null,
  questionnaires: {},
  activeQuestionnaireId: '0516',
  activeCard: 0,
  inputValues: {},
  cards: [],
  submittedCards: {},
  debugExpressions: false,
  histograms: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {

    case GET_URL_PARAMETERS: {
      const keys = Object.keys(state.questionnaires);
      let round = action.round;
      if (!includes(keys, round)) {
        round = state.activeQuestionnaireId;
      }
      const numCards = state.questionnaires[round].cards.length;
      const card = clamp(action.card, 0, numCards - 1);
      return {
        ...state,
        activeQuestionnaireId: round,
        activeCard: card
      };
    }

    case GET_STORED_VALUES: {
      return {
        ...state,
        debugExpressions: action.debugExpressions
      };
    }

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
      const dataSetId = questionnaire.cards[0].dataset;
      const dataSet = questionnaire.datasets.find((d) => d.key === dataSetId);
      // console.log(dataSetId, dataSet, questionnaire.datasets);

      return {
        ...state,
        validationError: null,
        activeQuestionnaireId: questionnaireId,
        cards: questionnaire.cards,
        datasets: questionnaire.datasets,
        dataset: dataSet,
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
      let newDataSet = action.name && state.datasets.filter((d) => d.key === action.name)[0];
//       console.log(newDataSet);
      if (!newDataSet) {
        newDataSet = { data: [], key: 'none' };
      }
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

    case SET_DEBUG_EXPRESSIONS: {
      return {
        ...state,
        debugExpressions: action.debug
      };
    }

    case FETCH_HISTOGRAM_DATA: {
      return {
        ...state,
        histograms: action.data
      };
    }

    default:
      return state;
  }
}

const setDataSet = (name) => ({ type: SET_DATASET, name });

function receiveHistogramData(jsonData) {
  return { type: FETCH_HISTOGRAM_DATA, data: jsonData };
}

function errorHistogramData(err) {
  console.error(err); // eslint-disable-line no-console
  return { type: ERROR_HISTOGRAM_DATA, error: err };
}

export function fetchHistogramData(url) {
  return dispatch => {
    dispatch(receiveHistogramData());
    fetch(url)
      .then(res => res.json())
      .then(jsonData => {
        dispatch(receiveHistogramData(jsonData));
      })
      .catch((err) => dispatch(errorHistogramData(err)));
  };
}

export const actions = {

  loadQuestionnaires: (data) => ({ type: LOAD_QUESTIONNAIRES, data }),

  setQuestionnaire: (questionnaireId) => ({ type: SET_QUESTIONNAIRE, questionnaireId }),

  resetQuestionnaire: () => ({ type: RESET_QUESTIONNAIRE }),

  updateUserInput: (key, value) => ({ type: UPDATE_USERINPUT, key, value }),

  setCard(index, datasetId) {
    return dispatch => {
      dispatch(setDataSet(datasetId));
      dispatch(visualizationActions.changeVis({ active: null, tooltip: { active: false } }));
      dispatch({ type: SET_CARD, index });
    };
  },

  setDataSet,

  quizSubmitCard: (cardKey) => ({ type: SUBMIT_CARD, cardKey }),

  setDebugExpression: (debug) => {
    localStorage.setItem('debugExpressions', debug);
    return { type: SET_DEBUG_EXPRESSIONS, debug };
  },

  receiveHistogramData,
  errorHistogramData,
  fetchHistogramData

};
