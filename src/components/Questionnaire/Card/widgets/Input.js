import React, { PropTypes } from 'react';
import Slider from './Slider/Slider';
import Choices from './Choices/Choices';
import { get } from 'lodash';

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
    const cardSubmitted = card.key in questions.submittedCards;
    const disabled = cardSubmitted;

    const histograms = questions.histograms;
    const questionnaireId = questions.activeQuestionnaireId;
    const histogramData = cardSubmitted && get(histograms, [questionnaireId, input.key]);

    const Widget = WidgetFactory[input.type]({
      ...input,
      ...this.props,
      id: input.key,
      disabled,
      histogramData
    });

    // return <div className="widget" key={ `${+new Date()}_${input.key}` }>{ Widget }</div>;
    return Widget;
  }
}
