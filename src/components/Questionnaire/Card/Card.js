import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

import Debug from './Debug/Debug';
import Text from './widgets/Text';
import Answer from './widgets/Answer/Answer';
import AnswerQuiz from './widgets/AnswerQuiz';
import Input from './widgets/Input';
import Submit from './widgets/Submit';
import RoundChooser from './widgets/RoundList/RoundList';
import DatasetMenu from './widgets/DataSetList/DataSetList';
import Logger from './widgets/logging';
import { googleLogger } from 'logic/logging';

const widgets = {
  text: Text,
  answer: Answer,
  answerQuiz: AnswerQuiz,
  input: Input,
  submit: Submit,
  roundChooser: RoundChooser,
  datasetMenu: DatasetMenu
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

  onClick = (evt) => {
    const handler = this.clickHandlers[evt.target.dataset.onclick];
    if (handler) {
      handler(evt);
    }
  }

  clickHandlers = { // eslint-disable-line react/sort-comp
    onStartClick: () => {
      const dataId = this.props.questions.cards[1].dataset;
      googleLogger('los');
      this.props.actions.setCard(1, dataId);
    }
  }

  getLogger() {
    const { actions, questions } = this.props;
    return new Logger(actions, __DEV__ && questions.debugExpressions);
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
    const { questions } = this.props;

    if (questions.cards.length === 0) {
      return <div />;
    }

    this.getLogger().clear();

    return (
      <div className="card" onClick={ this.onClick }>
        { __DEV__ && false &&
          <Debug { ...this.props }/>
        }
        { this.createWidgets(questions) }
      </div>
    );
  }
}
