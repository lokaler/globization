import { combineReducers } from 'redux';
import questions from './QReducer';
import vis from './VReducer';
import master from './DataReducer';

const rootReducer = combineReducers({
  questions,
  vis,
  master
});

export default rootReducer;
