import { combineReducers } from 'redux';
import { reducer as questions } from '../ducks/questionnaire';
import { reducer as vis } from '../ducks/visualization';
import { reducer as master }from '../ducks/dataset';
import { reducer as app } from '../ducks/app';

const rootReducer = combineReducers({
  questions,
  vis,
  master,
  app
});

export default rootReducer;
