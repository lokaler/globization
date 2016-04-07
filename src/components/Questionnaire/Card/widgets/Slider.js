import { isUndefined } from 'lodash';
import React, { PropTypes } from 'react';
import Rcslider from 'rc-slider';
import cssModules from 'react-css-modules';
import { sponLogger } from 'logic/logging';
import 'rc-slider/assets/index.css';

@cssModules()
export default class Slider extends React.Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired
  }

  onChange(value) {
    sponLogger();
    this.props.actions.updateUserInput(this.props.id, value);
    this.props.actions.postQuestionAnswer({ key: this.props.id, value });
  }

  tipFormatter(val) {
    return `${val} ${this.props.options.unit}`;
  }

  render() {
    const { id, questions, options } = this.props;
    const sliderChangeBind = this.onChange.bind(this);
    const tipFormatter = this.tipFormatter.bind(this);

    let value = questions.inputValues[id];
    if (isUndefined(value)) {
      value = options.value;
    }

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
