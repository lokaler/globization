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

  render() {
    const options = { ...this.props.data.options };
    const sliderChangeBind = this.onChange.bind(this);

    return (
      <div key={this.props.id} styleName="widget">
        <Rcslider
          defaultValue={options.value}
          min={options.min}
          max={options.max}
          onAfterChange={sliderChangeBind}
        />
      </div>
    );
  }
}
