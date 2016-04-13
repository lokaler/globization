import React, { PropTypes } from 'react';
import Slider from './Slider';
import Choices from './Choices';

const WidgetFactory = {
  slider: React.createFactory(Slider),
  choices: React.createFactory(Choices),
};

export default class Input extends React.Component {

  static propTypes = {
    questions: PropTypes.object.isRequired,
    card: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired
  }

  render() {
    const { card, input, questions } = this.props;
    const disabled = card.key in questions.submittedCards;

    const Widget = WidgetFactory[input.type]({
      ...input,
      ...this.props,
      id: input.key,
      disabled
    });

    return <span key={ `${+new Date()}_${input.key}` }>{ Widget }</span>;
  }
}
