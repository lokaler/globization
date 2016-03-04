import 'rc-slider/assets/index.css';
import React, { PropTypes } from 'react';
import Rcslider from 'rc-slider';

export default class Slider extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
  }

  sliderChange(value) {
    this.props.actions.updateUserInput(this.props.id, value);
  }

  render() {
    const options = { ...this.props.data.options };
    const userInput = { ...this.props.questions.userInput };
    const sliderChangeBind = this.sliderChange.bind(this);

    options.value = userInput[this.props.id] || options.value;

    return (
      <div key={this.props.id}>
        <Rcslider {...options} onChange={sliderChangeBind}/>
      </div>
    );
  }
}
