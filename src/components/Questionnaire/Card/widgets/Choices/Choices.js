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
    const { id, actions, card } = this.props;
    actions.updateUserInput(id, value);
    actions.quizSubmitCard(card.key);
    actions.updateUserInput(card.key, true);
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
        <div key={ `${ id }_${ value }_outer` } className={styles.choice}>
          <RadioInput
            key={ `${ id }_${ value }` }
            value={ value }
            label={ translate(label) }
            checked={ value === currentValue }
            disabled={ disabled }
            onClick={ onClick }
            histoWidth={ histogramData ? histoSize : null}
            histoLabel={ histogramData ? translate(histoVotes, { isSimpleNumber: true }) : null }
          />
          { histogramData && false &&
          <div className={styles.histo} key={ `${ id }_${ value }_answer` }>
            <div className={styles.bar} style={{ width: histoSize }}></div>
            <div className={styles.label}>{ translate(histoVotes, { isSimpleNumber: true }) }</div>
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
