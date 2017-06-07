import React from 'react';
import PropTypes from 'prop-types';
import translate from 'logic/translate';
import styles from './Choices.css';
import RadioInput from './RadioInput';
import { max, values, has } from 'lodash';
import { googleLogger } from 'logic/logging';

const noop = () => {}; // eslint-disable-line arrow-body-style

export default class Choices extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    // --- for this component only ---
    id: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    disabled: PropTypes.bool.isRequired,
    histogramData: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
  }

  setValue(value) {
    const { id, actions } = this.props;
    actions.updateUserInput(id, value);
    googleLogger('choice');
  }

  render() {
    const { questions, id, options, disabled, histogramData } = this.props;
    const currentValue = questions.inputValues[id];
    const histoMax = max(values(histogramData));

    const Radios = options.choices.map((option) => {
      const [value, label] = option;
      const onClick = disabled ? noop : this.setValue.bind(this, value);
      const histoVotes = has(histogramData, value) ? histogramData[value] : 0;
      const histoSize = `${histoVotes / histoMax * 90}%`;

      return (
        <div key={ `${ id }_${ value }_outer` }>
          <RadioInput
            key={ `${ id }_${ value }` }
            value={ value }
            label={ translate(label) }
            checked={ value === currentValue }
            disabled={ disabled }
            onClick={ onClick }
          />
          { histogramData &&
          <div className="bar" style={{ width: histoSize }} key={ `${ id }_${ value }_answer` }>
            { translate(histoVotes, { isSimpleNumber: true }) }
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
