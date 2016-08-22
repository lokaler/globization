import { isUndefined } from 'lodash';
import React, { PropTypes as PT } from 'react';
import Rcslider from 'rc-slider';
import Histogram from './SliderHistogram';
import { sponLogger } from 'logic/logging';
import translate from 'logic/translate';
import styles from './Slider.scss';
import 'rc-slider/assets/index.css';
import { googleLogger } from 'logic/logging';

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
    googleLogger('slider');
  }

  tipFormatter(val) {
    return `${translate(val, { isSimpleNumber: true })} ${this.props.options.unit}`;
  }

  render() {
    const { id, questions, options, disabled, histogramData } = this.props;
    const sliderChangeBind = this.onChange.bind(this);
    const tipFormatter = this.tipFormatter.bind(this);
    const unit = options.unit;
    const roundId = `r${ questions.activeQuestionnaireId }`;

    // const step = (options.max - options.min) / 5;
    // range(5).forEach(i => marks[i * step] = i * step);
    // console.log(marks);

    let value = questions.inputValues[id];
    if (isUndefined(value)) {
      value = options.value;
    }

    return (
      <div className={ styles.component }>
        { histogramData &&
          <Histogram
            min={ options.min }
            max={ options.max }
            histogramData={ histogramData }
            unit={ unit }
          />
        }
        <Rcslider
          disabled={ disabled }
          tipFormatter={ tipFormatter }
          defaultValue={ value }
          min={ options.min }
          max={ options.max }
          step={ options.step || 1 }
          className={ roundId }
          onAfterChange={ sliderChangeBind }
          tipTransitionName="rc-slider-tooltip-zoom-down"
        />
        <div className="marks">
          <div className="min">{ tipFormatter(options.min) }</div>
          <div className="max">{ tipFormatter(options.max) }</div>
        </div>
      </div>
    );
  }
}
