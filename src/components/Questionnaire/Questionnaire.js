import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

import Intro from './Intro';
import Card from './Card/Card';
import Footer from './Footer';
import ShadowScrollbars from './ShadowScrollbars';
import translate from 'logic/translate';

@cssModules()
export default class Questionnaire extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.loadData();
    window.actions = this.props.actions;
  }

  loadData() {
    this.props.actions.setQuestionnaire('0316');
  }

  render() {
    const questions = { ...this.props.questions };
    if (questions.questionData.length === 0) {
      return <div />;
    }

    let nextBtnLabel = 'next';

    const activeCard = questions.activeCard;
    const firstCard = activeCard === -1;
    const lastCard = activeCard === questions.questionData.length - 2;
    const veryLastCard = activeCard === questions.questionData.length - 1;

    if (!firstCard) {
      if (lastCard) {
        nextBtnLabel = 'last';
      } else if (veryLastCard) {
        nextBtnLabel = 'close';
      }
    }

    const app = this.props.app;
    const scrollHeight = app.mobile ? ((app.height * (1 - 0.3)) - 50) : app.height - 50;
    const scrollWidth = app.mobile ? app.width : app.width * (1 - 0.65);

    return (
      <div styleName="questions">
        <ShadowScrollbars
          activeCard={ this.props.questions.activeCard }
          style={{ width: scrollWidth, height: scrollHeight }}
        >
          <div styleName="inner">
            { firstCard ?
              <Intro { ...this.props }/>
              :
              <Card { ...this.props }/>
            }
          </div>
        </ShadowScrollbars>
        <Footer
          nextBtnLabel={ translate(nextBtnLabel) }
          prevBtnLabel={ translate('prev') }
          { ...this.props }
        />
      </div>
    );
  }
}
