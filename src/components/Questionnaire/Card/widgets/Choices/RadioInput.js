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
    const { value, checked, label, disabled, onClick, histoWidth, histoLabel } = this.props;
    const noop = () => {}; // eslint-disable-line arrow-body-style

    return (
      <div className={ [styles.component, histoWidth ? 'voted' : '', checked ? 'active' : ''].join(' ') } onClick={ onClick }>
        <div className={ styles.label }>
          { label }
        </div>
        { histoWidth &&
          <div>
            <div className={ styles.histoBar } style={{ width: histoWidth }}></div>
            <div className={ styles.histoLabel }>{ histoLabel }</div>
          </div>
        }
      </div>
    );
  }
}


// <div className={ styles.left }>
//   <input
//     type="radio"
//     value={ value }
//     checked={ checked }
//     onChange={ noop } // so react doesn't complain
//     disabled={ disabled }
//   />
// </div>