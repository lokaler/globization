import React, { PropTypes } from 'react';
import d3 from 'd3';
import { debounce } from 'lodash';

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

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.app.mobile !== nextProps.app.mobile && nextProps.app.mobile === true) {
  //     const height = window.outerHeight || document.documentElement.clientHeight;
  //     d3.select(window.frameElement).style('height', `${height}px`);
  //     // d3.select(window.frameElement).style('height', '550px');
  //   }
  // }

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
    // const width = window.outerWidth || document.documentElement.clientWidth;
    // console.log(screen.width, screen.height, bbox);
    this.props.actions.setWindowSize({ width: bbox.width, height: bbox.height });
  }

  render() {
    const responsiveClass = this.props.app.mobile ? 'mq-mobile' : 'mq-desktop';
    // console.log(this.props.app);
    // const ready = !isUndefined(this.props.app.mobile);
    // d3.select('body').attr('class', responsiveClass);
    return (
      <div className={ responsiveClass }>
        <div className={ styles.container }>
          <div className="left">
            <Vis {...this.props}/>
          </div>
          <div className="right">
            <Questionnaire {...this.props}/>
          </div>
        </div>
      </div>
    );
  }
}
