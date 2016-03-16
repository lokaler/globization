/* eslint-disable */

import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.scss';
import classnames from 'classnames';
import translate from 'logic/translate';

@cssModules(styles)
export default class DataSetList extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired
  };

  componentDidMount() {

  }

  handleClick(key) {
    this.props.actions.setDataSet(key);
  }

  getActiveClass(key){
    return classnames([ this.props.master.dataset.key === key ? "active" : ""]);
  }

  render() {
    const list = this.props.master.datasets.map((d, i) => {
      return (
        <li
          className={ this.getActiveClass(d.key) }
          key={i} onClick={ this.handleClick.bind(this, d.key) }
        >
          { translate(d.name) }
          <span className="info">{ d.data.length } { translate('countries') }</span>
        </li>
      );
    });

    return (
      <div className="DataSetList">
        <ul>
          { list }
        </ul>
      </div>
    );
  }
}
