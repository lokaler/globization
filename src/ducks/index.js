import { combineReducers } from 'redux';

import { reducer as questionnaireReducer } from './questionnaire';
import { reducer as visualizationReducer } from './visualization';
import { reducer as datasetReducer }from './dataset';
import { reducer as appReducer } from './app';

import { actions as questionnaireActions } from './questionnaire';
import { actions as appActions } from './app';
import { actions as visualizationActions } from './visualization';
import { actions as datasetActions } from './dataset';


export const reducer = combineReducers({
  app: appReducer,
  master: datasetReducer,
  questions: questionnaireReducer,
  vis: visualizationReducer
});


export const actions = {
  ...appActions,
  ...datasetActions,
  ...questionnaireActions,
  ...visualizationActions
};
