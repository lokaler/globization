import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioInput.css';

export default class RadioInput extends React.Component {

  static propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { value, checked, label, disabled, onClick } = this.props;
    const noop = () => {}; // eslint-disable-line arrow-body-style

    return (
      <div className={ styles.component } onClick={ onClick }>
        <div className={ styles.left }>
          <input
            type="radio"
            value={ value }
            checked={ checked }
            onChange={ noop } // so react doesn't complain
            disabled={ disabled }
          />
        </div>
        <div className={ styles.right }>
          { label }
        </div>
      </div>
    );
  }
}
