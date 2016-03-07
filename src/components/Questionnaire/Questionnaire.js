import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

import Text from './widgets/Text';
import Slider from './widgets/Slider';
import Choices from './widgets/Choices';
import Answer from './widgets/Answer';
import Footer from './Footer';
import Data from './Data';

const WidgetFactory = {
  text: React.createFactory(Text),
  slider: React.createFactory(Slider),
  choices: React.createFactory(Choices),
  answer: React.createFactory(Answer)
};

@cssModules()
export default class Questionnaire extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired
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
    return questions.questionData[questions.activeCard]
      .filter((item) => item.type !== 'functions')
      .map((item) =>
        WidgetFactory[item.type]({
          id: item.key,
          ...item,
          ...this.props
        })
      );
  }

  render() {
    const questions = { ...this.props.questions };
    if (questions.questionData.length === 0) {
      return <div />;
    }

    const widgets = this.createWidgets(questions);
    const data = __DEV__ &&
      <Data onClickLoad={ this.onClickLoad } onClickEdit={ this.onClickEdit }/>;

    return (
      <div>
        <div styleName="questions">
          { data }
          { widgets }
        </div>
        <Footer { ...this.props }/>
      </div>
    );
  }
}
