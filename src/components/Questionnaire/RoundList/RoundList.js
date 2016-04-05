import React, { PropTypes } from 'react';
import styles from './RoundList.scss';

export default class RoundList extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired
  };


  render() {
    const rounds = ['Konsum', 'Dicke Kinder'].map(d => (
        <option value="{d}" onClick={ this.handleClick }>{d}</option>
    ));

    return (
      <div className={ styles.component }>
        <div className="theme">
          <span className="info">Thema:</span>
          <select className="dropdown">
            { rounds }
          </select>
        </div>
      </div>
    );
  }
}
