import { combineReducers } from 'redux';

import { reducer as questionnaireReducer } from './questionnaire';
import { reducer as visualizationReducer } from './visualization';
import { reducer as appReducer } from './app';

import { actions as questionnaireActions } from './questionnaire';
import { actions as appActions } from './app';
import { actions as visualizationActions } from './visualization';


export const reducer = combineReducers({
  app: appReducer,
  questions: questionnaireReducer,
  vis: visualizationReducer
});


export const actions = {
  ...appActions,
  ...questionnaireActions,
  ...visualizationActions
};
