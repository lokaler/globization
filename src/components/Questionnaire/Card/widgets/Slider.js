import { isUndefined } from 'lodash';
import React, { PropTypes } from 'react';
import Rcslider from 'rc-slider';
import cssModules from 'react-css-modules';
import { sponLogger } from 'logic/logging';
import 'rc-slider/assets/index.css';
import styles from '../../Questionnaire.scss';

@cssModules(styles)
export default class Slider extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    // --- for this component only ---
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    disabled: PropTypes.bool.isRequired
  }

  onChange(value) {
    sponLogger();
    const { id, actions } = this.props;
    actions.updateUserInput(id, value);
  }

  tipFormatter(val) {
    return `${val} ${this.props.options.unit}`;
  }

  render() {
    const { id, questions, options, disabled } = this.props;
    const sliderChangeBind = this.onChange.bind(this);
    const tipFormatter = this.tipFormatter.bind(this);

    let value = questions.inputValues[id];
    if (isUndefined(value)) {
      value = options.value;
    }

    return (
      <div styleName="widget" className="slider">
        <Rcslider
          disabled={ disabled }
          tipFormatter={ tipFormatter }
          defaultValue={ value }
          min={ options.min }
          max={ options.max }
          step = { options.step || 1 }
          onAfterChange={ sliderChangeBind }
          tipTransitionName="rc-slider-tooltip-zoom-down"
        />
      </div>
    );
  }
}
