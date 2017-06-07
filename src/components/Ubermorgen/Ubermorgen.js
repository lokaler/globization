import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { googleLogger } from '../../logic/logging';
import Background from '../Background/Background';
import Questionnaire from '../Questionnaire/Questionnaire';
import questionnaires from 'data/questionnaires/index';
import styles from './Ubermorgen.css';
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
    actions.fetchHistogramData('https://uebermorgen-logbuch.lokaler.de/');
    // actions.fetchHistogramData('data/stats.json');
    const state = store.getState();
    actions.setQuestionnaire(state.questions.activeQuestionnaireId);
    if (!state.questions.activeCard){
      actions.setCard(0);
    }
    // if (state.app.dataset) {
    //   actions.setDataSet(state.app.dataset);
    // }
    // if (state.app.country) {
    //   actions.zoomToCountry(state.app.country);
    // }
    // if (state.app.vis) {
    //   actions.changeVis({ type: state.app.vis });
    // }
    this.configureHotReload();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
     const width = window.innerWidth;
     const height = window.innerHeight;
     this.props.actions.setWindowSize({ width, height });
  }

  componentDidMount() {
    this.handleResize();
    googleLogger('loaded', 1);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.app.mobile) {
      window.frameElement.style.height = window.parent.innerHeight + 'px'
    }
  }

  configureHotReload() {
    const { actions } = this.props;

    if (module.hot) {
      // Enable Webpack hot module replacement for questionnaires
      module.hot.accept('../../data/questionnaires/index', () => {
        if (process.env.NODE_ENV === "development") {
          console.debug('reloading questionnaires...'); // eslint-disable-line no-console
        }
        const newQuestionnaires = require('../../data/questionnaires/index').default;
        actions.loadQuestionnaires(newQuestionnaires);
        actions.setQuestionnaire(store.getState().questions.activeQuestionnaireId);
      });
    }
  }

  render() {
    const { mobile } = this.props.app;
    const responsiveClass = mobile ? 'mq-mobile' : 'mq-desktop';

    return (
      <div className={ responsiveClass }>
        <div className={ styles.container } ref="container">
          <div ref="left" className="left">
            <Background {...this.props}/>
          </div>
          <div className="right">
            <Questionnaire {...this.props}/>
          </div>

        </div>
      </div>
    );
  }
}
