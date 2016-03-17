import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

import Intro from './Intro';
import Text from './widgets/Text';
import Answer from './widgets/Answer';
import Input from './widgets/Input';

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
    window.actions = this.props.actions;
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
          index,
          key: `${this.props.questions.activeCard}_${widgetKey}_${index}`
        });
      });
  }

  render() {
    const questions = { ...this.props.questions };
    const activeCard = questions.activeCard;
    const firstCard = activeCard === -1;
    const cardTitle = (questions.questionData[activeCard] || {}).title;

    if (questions.questionData.length === 0) {
      return <div />;
    }

    let widgets = null;

    if (firstCard) {
      widgets = <Intro { ...this.props }/>;
    } else {
      widgets = this.createWidgets(questions);
    }

    return (
      <div>
        { __DEV__ && !firstCard &&
          <span style={{ color: 'green' }}>card: "{ cardTitle }"</span>
        }
        { widgets }
      </div>
    );
  }
}
