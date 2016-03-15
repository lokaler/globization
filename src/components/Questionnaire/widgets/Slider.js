import 'rc-slider/assets/index.css';
import React, { PropTypes } from 'react';
import Rcslider from 'rc-slider';
import cssModules from 'react-css-modules';
import * as Logic from '../../../logic/questionnaire-functions';

@cssModules()
export default class Slider extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    master: PropTypes.object.isRequired
  }

  onChange(value) {
    this.props.actions.updateUserInput(this.props.id, value);

    const country = Logic.getCountryCode(value, this.props);
    this.props.actions.changeVis({
      animation: {
        action: 'zoomToCountry',
        payload: country
      },
      active: country
    });
  }

  tipFormatter(val) {
    return `${val} ${this.props.data.options.unit}`;
  }

  render() {
    const options = { ...this.props.data.options };
    const sliderChangeBind = this.onChange.bind(this);
    const tipFormatter = this.tipFormatter.bind(this);

    const value = this.props.questions.inputs[this.props.id] ?
      this.props.questions.inputs[this.props.id].value : options.value;

    return (
      <div key={this.props.id} styleName="widget" className="slider">
        <Rcslider
          tipFormatter={tipFormatter}
          defaultValue={value}
          min={options.min}
          max={options.max}
          onAfterChange={sliderChangeBind}
        />
      </div>
    );
  }
}
