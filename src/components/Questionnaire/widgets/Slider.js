/* eslint-disable */

import 'rc-slider/assets/index.css';
import React, { PropTypes } from 'react';
import Rcslider from 'rc-slider';
import cssModules from 'react-css-modules';
import Dataset from 'logic/Dataset';

@cssModules()
export default class Slider extends React.Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired
  }

  onChange(value) {
    this.props.actions.updateUserInput(this.props.id, value);
  }

  tipFormatter(val) {
    return `${val} ${this.props.options.unit}`;
  }

  render() {
    const options = { ...this.props.options };
    const sliderChangeBind = this.onChange.bind(this);
    const tipFormatter = this.tipFormatter.bind(this);

    const value = this.props.questions.inputs[this.props.id] &&
      this.props.questions.inputs[this.props.id].value ?
      this.props.questions.inputs[this.props.id].value : options.value;

    return (
      <div styleName="widget" className="slider">
        <Rcslider
          tipFormatter={ tipFormatter }
          defaultValue={ value }
          min={ options.min }
          max={ options.max }
          step = { options.step || 1 }
          onAfterChange={ sliderChangeBind }
        />
      </div>
    );
  }
}
