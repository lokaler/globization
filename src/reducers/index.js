import { combineReducers } from 'redux';
import questions from './QReducer';
import vis from './VReducer';

const rootReducer = combineReducers({
  questions,
  vis
});

export default rootReducer;
