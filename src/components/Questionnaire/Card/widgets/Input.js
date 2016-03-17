import React, { PropTypes } from 'react';
import Slider from './Slider';
import Choices from './Choices';

const WidgetFactory = {
  slider: React.createFactory(Slider),
  choices: React.createFactory(Choices),
};

export default class Input extends React.Component {

  static propTypes = {
    input: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired
  }

  render() {
    const { input } = this.props;

    const Widget = WidgetFactory[input.type]({
      ...input,
      ...this.props,
      id: input.key,
    });

    return <span key={ `${+new Date()}_${input.key}` }>{ Widget }</span>;
  }
}
