import questionnaires from 'data/questionnaires/index';

const SET_QUESTIONNAIRE = 'SET_QUESTIONNAIRE';
const SET_CARD = 'SET_CARD';
const UPDATE_USERINPUT = 'UPDATE_USERINPUT';

const initialState = {
  activeChapter: 0,
  activeCard: -1,
  inputValues: {},
  questionData: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {

    case SET_QUESTIONNAIRE: {
      const questionData = questionnaires[action.id].data;
      const options = questionnaires[action.id].options;
      return {
        ...state,
        questionData,
        options,
        inputValues: {}
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

  setQuestionnaire: (id) => (
    { type: SET_QUESTIONNAIRE, id }
  ),
  updateUserInput: (key, value) => (
    { type: UPDATE_USERINPUT, key, value }
  ),
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
