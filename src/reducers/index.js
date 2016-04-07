import { combineReducers } from 'redux';
import { reducer as questions } from '../ducks/questionnaire';
import { reducer as vis } from '../ducks/visualization';
import data from './DataReducer';
import { reducer as app } from '../ducks/app';

const rootReducer = combineReducers({
  questions,
  vis,
  master: data,
  app
});

export default rootReducer;
