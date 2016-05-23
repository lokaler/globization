import { isUndefined } from 'lodash';
import React, { PropTypes as PT } from 'react';
import Rcslider from 'rc-slider';
import Histogram from './SliderHistogram';
import { sponLogger } from 'logic/logging';
import styles from '../widgets.scss';
import 'rc-slider/assets/index.css';
import './Rcslider.scss';

export default class Slider extends React.Component {

  static propTypes = {
    actions: PT.object.isRequired,
    questions: PT.object.isRequired,
    // --- for this component only ---
    id: PT.string.isRequired,
    type: PT.string.isRequired,
    options: PT.object.isRequired,
    disabled: PT.bool.isRequired,
    histogramData: PT.oneOfType([PT.bool, PT.object])
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
    const { id, questions, options, disabled, histogramData } = this.props;
    const sliderChangeBind = this.onChange.bind(this);
    const tipFormatter = this.tipFormatter.bind(this);

    let value = questions.inputValues[id];
    if (isUndefined(value)) {
      value = options.value;
    }

    return (
      <div className={ styles.widget }>
        { histogramData &&
          <Histogram histogramData={ histogramData }/>
        }
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
