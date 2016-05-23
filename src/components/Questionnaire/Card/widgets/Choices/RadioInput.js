import React, { PropTypes as PT } from 'react';
import translate from 'logic/translate';
import styles from './RadioInput.scss';

export default class RadioInput extends React.Component {

  static propTypes = {
    value: PT.string.isRequired,
    label: PT.string.isRequired,
    checked: PT.bool.isRequired,
    disabled: PT.bool.isRequired,
    onClick: PT.func.isRequired
  }

  render() {
    const { value, checked, label, disabled, onClick } = this.props;
    const noop = () => {}; // eslint-disable-line arrow-body-style

    return (
      <div className={ styles.component } onClick={ onClick }>
        <input
          type="radio"
          value={ value }
          checked={ checked }
          onChange={ noop } // so react doesn't complain
          disabled={ disabled }
        />
        <span className="label">
          { translate(label) }
        </span>
      </div>
    );
  }
}
