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
    actions.fetchHistogramData('https://uebermorgen-logbuch.lokaler.de/');
    actions.setQuestionnaire(store.getState().questions.activeQuestionnaireId);
    this.configureHotReload();
    window.addEventListener('resize', this.handleResize.bind(this));
    window.parent.addEventListener('scroll', this.handleScroll.bind(this));
    this.handleResize();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.app.mobile) {
  //     d3.select(window.frameElement)
  //       .style('padding-top', '20px')
  //       .style('padding-bottom', '40px');
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

  clickFullscreen() {
    this.props.actions.setFullscreen(true);
    this.props.actions.setWindowSize({ width: screen.width, height: screen.height });

    d3.select(window.frameElement).style({
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      padding: 0,
      margin: 0,
      width: '100%',
      height: '100%'
    });
  }

  handleResize() {
    const bbox = d3.select('body').node().getBoundingClientRect();
    this.props.actions.setWindowSize({ width: bbox.width, height: bbox.height });
  }

  handleScroll() {
    if (!this.props.app.mobile) { return; }
    const bbox = window.frameElement.getBoundingClientRect();
    const top = bbox.top < 0 ? bbox.top * -1 : 0;
    if (bbox.bottom > screen.height - 50) {
      d3.select(this.refs.left).style('transform', `translate3d(0,${top}px,0)`);
    }
  }

  render() {
    const responsiveClass = this.props.app.mobile ? 'mq-mobile' : 'mq-desktop';
    const isMobile = this.props.app.mobile;
    const isFullscreen = this.props.app.fullscreen;
    const fullscreenClick = this.clickFullscreen.bind(this);

    return (
      <div className={ responsiveClass }>
        { isMobile && !isFullscreen && false &&
          <div className="mobileFullscreenOverlay" onClick={ fullscreenClick }>
            Fullscreen
          </div>
        }
        <div className={ styles.container }>
          <div ref="left" className="left">
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
