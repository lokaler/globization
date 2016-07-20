import React, { PropTypes as PT } from 'react';
import translate from 'logic/translate';
import styles from './Choices.scss';
import RadioInput from './RadioInput';
import { max, values } from 'lodash';


const noop = () => {}; // eslint-disable-line arrow-body-style

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
    const histoMax = max(values(histogramData));

    const Radios = options.choices.map((option) => {
      const [value, label] = option;
      const onClick = disabled ? noop : this.setValue.bind(this, value);
      const histoVotes = histogramData[value];
      const histoSize = `${histoVotes / histoMax * 100}%`;

      return (
        <div>
          <RadioInput
            key={ `${ id }_${ value }` }
            value={ value }
            label={ translate(label) }
            checked={ value === currentValue }
            disabled={ disabled }
            onClick={ onClick }
          />
          { histogramData &&
          <div className="bar" style={{ width: histoSize }}>
            { histoVotes }
          </div>
          }
        </div>
      );
    });

    return (
      <div className={ styles.component }>
        { Radios }
      </div>
    );
  }
}
