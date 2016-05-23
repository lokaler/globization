import React, { PropTypes as PT } from 'react';
import styles from '../../../Questionnaire.scss';
import RadioInput from './RadioInput';
import Histogram from './ChoicesHistogram';

export default class Choices extends React.Component {

  static propTypes = {
    actions: PT.object.isRequired,
    questions: PT.object.isRequired,
    // --- for this component only ---
    id: PT.string.isRequired,
    options: PT.object.isRequired,
    disabled: PT.bool.isRequired,
    histogramData: PT.oneOfType([PT.bool, PT.object])
  }

  setValue(value) {
    const { id, actions } = this.props;
    actions.updateUserInput(id, value);
  }

  render() {
    const { questions, id, options, disabled, histogramData } = this.props;
    const currentValue = questions.inputValues[id];

    const Radios = options.choices.map((option) => {
      const [value, label] = option;
      const noop = () => {}; // eslint-disable-line arrow-body-style
      const onClick = disabled ? noop : this.setValue.bind(this, value);

      return (
        <RadioInput
          key={ `${ id }_${ value }` }
          value={ value }
          label={ label }
          checked={ value === currentValue }
          disabled={ disabled }
          onClick={ onClick }
        />
      );
    });

    return (
      <div className={ styles.widget }>
        { Radios }
        { histogramData &&
          <Histogram histogramData={ histogramData }/>
        }
      </div>
    );
  }
}
