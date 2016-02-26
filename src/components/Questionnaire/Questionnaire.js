import React, { PropTypes } from 'react';

import Text from './widgets/Text';
import Slider from './widgets/Slider';
import Choices from './widgets/Choices';
import Answer from './widgets/Answer';

const WidgetFactory = {
  text: React.createFactory(Text),
  slider: React.createFactory(Slider),
  choices: React.createFactory(Choices),
  answer: React.createFactory(Answer)
};

export default class Questionnaire extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.actions.requestQuestionData('/data/questionnaire.json');
  }

  createWidgets() {
    const appState = { ...this.props.appState };

    return appState.questionData.map((item, index) => {
      if (item.type === 'functions') {
        return '';
      }

      const id = `${appState.activeChapter}_${appState.activeCard}_${index}`;

      return WidgetFactory[item.type]({
        data: item.data,
        key: id,
        id,
        ...this.props
      });
    });
  }

  render() {
    const widgets = this.createWidgets();

    return (
      <div className="questions">
        { widgets }
      </div>
    );
  }
}
