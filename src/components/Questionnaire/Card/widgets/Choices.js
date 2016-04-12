import React, { PropTypes } from 'react';
import translate from 'logic/translate';
import { logbuch } from 'logic/logbuch';
import styles from './widgets.scss';

export default class Choices extends React.Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired
  }

  setValue(value) {
    const { id, actions } = this.props;
    actions.updateUserInput(id, value);
    logbuch({ key: id, value });
  }

  render() {
    const { id, options, questions } = this.props;
    const currentValue = questions.inputValues[id];

    const Radios = options.choices.map((option) => {
      const [value, label] = option;
      const onClick = this.setValue.bind(this, value);
      const noop = () => {}; // eslint-disable-line arrow-body-style

      return (
        <div
          key={ `${ id }_${ value }` }
          className={ styles.pointer }
          onClick={ onClick }
        >
          <input
            type="radio"
            value={ value }
            checked={ value === currentValue }
            onChange={ noop } // so react doesn't complain
          />
          <span className={ styles.choicelabel }>
            { translate(label) }
          </span>
        </div>
      );
    });

    return (
      <div className={ styles.widget }>
        { Radios }
      </div>
    );
  }
}
