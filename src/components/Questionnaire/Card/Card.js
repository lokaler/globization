import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

import Text from './widgets/Text';
import Answer from './widgets/Answer';
import AnswerQuiz from './widgets/AnswerQuiz';
import Input from './widgets/Input';
import Submit from './widgets/Submit';

const widgets = {
  text: Text,
  answer: Answer,
  answerQuiz: AnswerQuiz,
  input: Input,
  submit: Submit
};

@cssModules()
export default class Questionnaire extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
  }

  shouldComponentUpdate(nextProps) {
    const p = this.props;
    const n = nextProps;
    return (
      (p.app !== n.app)
      || (p.questions !== n.questions)
      || (p.master !== n.master)
    );
  }

  createWidgets(questions) {
    const card = questions.cards[questions.activeCard];
    return card.content.map(
      (item, index) => {
        const widgetType = Object.keys(item)[0];
        const Widget = widgets[widgetType];
        if (!Widget) {
          throw new Error(`No widget "${ widgetType }"`);
        }
        return (
          <Widget
            key={ `${card.key}_${widgetType}_${index}` }
            card={ card }
            { ...item }
            { ...this.props }
          />
        );
      });
  }

  render() {
    const questions = { ...this.props.questions };
    const activeCard = questions.activeCard;
    const firstCard = activeCard === -1;
    const cardTitle = (questions.cards[activeCard] || {}).title;

    if (questions.cards.length === 0) {
      return <div />;
    }

    return (
      <div>
        { __DEV__ && !firstCard &&
          <span style={{ color: 'green' }}>card: "{ cardTitle }"</span>
        }
        { this.createWidgets(questions) }
      </div>
    );
  }
}
