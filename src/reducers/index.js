import { combineReducers } from 'redux';
import { reducer as questions } from '../ducks/questionnaire';
import visualization from './VisualizationReducer';
import data from './DataReducer';
import app from './AppReducer';

const rootReducer = combineReducers({
  questions,
  vis: visualization,
  master: data,
  app
});

export default rootReducer;
