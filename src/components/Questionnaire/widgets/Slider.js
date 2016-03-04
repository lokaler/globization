import 'rc-slider/assets/index.css';
import React, { PropTypes } from 'react';
import Rcslider from 'rc-slider';
import cssModules from 'react-css-modules';

@cssModules()
export default class Slider extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
  }

  onChange(value) {
    this.props.actions.updateUserInput(this.props.id, value);
  }

  getSliderValue(inputs, options) {
    return inputs[this.props.id] && inputs[this.props.id].value || options.value;
  }

  render() {
    const options = { ...this.props.data.options };
    const inputs = { ...this.props.questions.inputs };
    const sliderChangeBind = this.onChange.bind(this);

    options.value = this.getSliderValue(inputs, options);

    return (
      <div key={this.props.id} styleName="widget">
        <Rcslider {...options} onChange={sliderChangeBind}/>
      </div>
    );
  }
}
