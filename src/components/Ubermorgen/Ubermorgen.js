import React, { PropTypes } from 'react';
import d3 from 'd3';
import { debounce } from 'lodash';
import cssModules from 'react-css-modules';

import Vis from '../Vis/VisWrapper';
import Questionnaire from '../Questionnaire/Questionnaire';

import questionnaires from 'data/questionnaires/index';
import styles from './styles.scss';

@cssModules(styles)
export default class UbermorgenApp extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.handleResize = debounce(this.handleResize.bind(this), 300);
  }

  componentDidMount() {
    const actions = this.props.actions;
    window.actions = actions; // quickhack for questionnaire functions
    actions.getUrlParameters();
    actions.requestDataSets('./data/datasets.json');
    // actions.requestDataSets('./data/dataset0416.json');
    actions.loadQuestionnaires(questionnaires);
    actions.setQuestionnaire('0416');
    window.addEventListener('resize', this.handleResize.bind(this));
    this.handleResize();
  }

  onDoubleClick = () => {
    if (__DEV__) {
      this.props.actions.setQuestionnaire(this.props.questions.activeQuestionnaireId);
      this.props.actions.setCard(this.props.questions.activeCard);
    }
  }

  handleResize() {
    const bbox = d3.select('body').node().getBoundingClientRect();
    this.props.actions.setWindowSize({ width: bbox.width, height: bbox.height });
  }

  render() {
    // console.log(this.props.app);
    const responsiveClass = this.props.app.mobile ? 'mq-mobile' : 'mq-desktop';
    return (
      <div className={ responsiveClass } onDoubleClick={ this.onDoubleClick }>
        <div styleName="container">
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
