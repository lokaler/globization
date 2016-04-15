import React, { PropTypes } from 'react';
import d3 from 'd3';
import { debounce } from 'lodash';
import classNames from 'classnames';

import Vis from '../Vis/VisWrapper';
import Questionnaire from '../Questionnaire/Questionnaire';

import questionnaires from 'data/questionnaires/index';
import styles from './Ubermorgen.scss';
import store from 'store';


export default class UbermorgenApp extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.handleResize = debounce(this.handleResize.bind(this), 300);
  }

  componentWillMount() {
    const { actions } = this.props;
    window.actions = actions; // quickhack for questionnaire functions
    actions.loadQuestionnaires(questionnaires);
    actions.getUrlParameters();
    actions.getStoredValues();
    actions.setQuestionnaire(store.getState().questions.activeQuestionnaireId);
    this.configureHotReload();
    window.addEventListener('resize', this.handleResize.bind(this));
    this.handleResize();
  }

  configureHotReload() {
    const { actions } = this.props;

    if (module.hot) {
      // Enable Webpack hot module replacement for questionnaires
      module.hot.accept('../../data/questionnaires/index', () => {
        if (__DEV__) {
          console.debug('reloading questionnaires...'); // eslint-disable-line no-console
        }
        const newQuestionnaires = require('../../data/questionnaires/index').default;
        actions.loadQuestionnaires(newQuestionnaires);
        actions.setQuestionnaire(store.getState().questions.activeQuestionnaireId);
      });
    }
  }

  handleResize() {
    const bbox = d3.select('body').node().getBoundingClientRect();
    this.props.actions.setWindowSize({ width: bbox.width, height: bbox.height });
  }

  render() {
    const { app } = this.props;
    const className = classNames(
      styles.component,
      app.mobile ? 'mq-mobile' : 'mq-desktop'
    );
    return (
      <div className={ className }>
        <div className={ styles.left }>
          <Vis {...this.props}/>
        </div>
        <div className={ styles.right }>
          <Questionnaire {...this.props}/>
        </div>
      </div>
    );
  }
}
