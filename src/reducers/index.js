import { combineReducers } from 'redux';
import questions from './QReducer';
import vis from './VReducer';
import master from './DataReducer';
import app from './AppReducer';

const rootReducer = combineReducers({
  questions,
  vis,
  master,
  app
});

export default rootReducer;
