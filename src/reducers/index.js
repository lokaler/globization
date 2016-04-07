import { combineReducers } from 'redux';
import { reducer as questions } from '../ducks/questionnaire';
import visualization from './VisualizationReducer';
import data from './DataReducer';
import { reducer as app } from '../ducks/app';

const rootReducer = combineReducers({
  questions,
  vis: visualization,
  master: data,
  app
});

export default rootReducer;
