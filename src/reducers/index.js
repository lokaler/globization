import { combineReducers } from 'redux';
import questionnaire from './QuestionnaireReducer';
import visualization from './VisualizationReducer';
import data from './DataReducer';
import app from './AppReducer';

const rootReducer = combineReducers({
  questions: questionnaire,
  vis: visualization,
  master: data,
  app
});

export default rootReducer;
