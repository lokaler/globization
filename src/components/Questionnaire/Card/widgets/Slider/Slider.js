import { isUndefined } from 'lodash';
import React, { PropTypes as PT } from 'react';
import RcSlider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import Histogram from './SliderHistogram';
import { sponLogger, googleLogger } from 'logic/logging';
import translate from 'logic/translate';
import styles from './Slider.css';
import 'rc-slider/assets/index.css';
import 'rc-slider/assets/index.css';

// const SliderWithTooltip = RcSlider.createSliderWithTooltip(RcSlider.slider);
const Handle = RcSlider.Handle;

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
        transitionName="zoom-down"
      >
        <Handle {...restProps} />
      </Tooltip>
    );
  };

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
    // console.log(translate(this.props.options.unit), (this.props.options.unit));
    return `${translate(val, { isSimpleNumber: true })} ${translate(this.props.options.unit)}`;
  }

  render() {
    console.log(this.props);

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
        <RcSlider
          disabled={ disabled }
          tipFormatter={ tipFormatter }
          defaultValue={ value }
          handle={handle} 
          min={ options.min }
          max={ options.max }
          step={ options.step || 1 }
          className={ roundId }
          onAfterChange={ sliderChangeBind }
        />
        <div className="marks">
          <div className="min">{ tipFormatter(options.min) }</div>
          <div className="max">{ tipFormatter(options.max) }</div>
        </div>
      </div>
    );
  }
}
