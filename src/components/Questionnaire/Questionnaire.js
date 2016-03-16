import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

import Intro from './Intro';
import Text from './widgets/Text';
import Answer from './widgets/Answer';
import Input from './widgets/Input';
import Footer from './Footer';
import ShadowScrollbars from './ShadowScrollbars';
import translate from 'logic/translate';

const WidgetFactory = {
  text: React.createFactory(Text),
  answer: React.createFactory(Answer),
  input: React.createFactory(Input)
};

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
  }

  onClickLoad = () => {
    this.loadData();
  }

  onClickEdit = () => {
    throw new Error('Editing is not implemented, yet!');
  }

  loadData() {
    this.props.actions.requestQuestionData('./data/questionnaire.json');
  }

  createWidgets(questions) {
    return questions.questionData[questions.activeCard].content
      .map((item, index) => {
        const widgetKey = Object.keys(item)[0];
        return WidgetFactory[widgetKey]({
          ...item,
          ...this.props,
          key: `${+new Date()}_${widgetKey}_${index}`
        });
      }
    );
  }

  render() {
    const questions = { ...this.props.questions };
    if (questions.questionData.length === 0) {
      return <div />;
    }

    let widgets = null;
    let nextBtnLabel = 'next';

    const activeCard = questions.activeCard;
    const firstCard = activeCard === -1;
    const lastCard = activeCard === questions.questionData.length - 2;
    const veryLastCard = activeCard === questions.questionData.length - 1;

    if (firstCard) {
      widgets = <Intro { ...this.props }/>;
    } else {
      widgets = this.createWidgets(questions);
      if (lastCard) {
        nextBtnLabel = 'last';
      } else if (veryLastCard) {
        nextBtnLabel = 'close';
      }
    }

    // const cardTitle = (questions.questionData[activeCard] || {}).title;
    // { __DEV__ && !firstCard &&
    //   <span style={{ color: 'green' }}>card: "{ cardTitle }"</span>
    // }
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
            { widgets }
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
