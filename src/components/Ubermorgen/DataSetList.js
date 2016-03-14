/* eslint-disable */

import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.scss';
import classnames from 'classnames';

@cssModules(styles)
export default class DataSetList extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired
  };

  componentDidMount() {

  }

  handleClick(name) {
    this.props.actions.setDataSet(name);
  }

  getActiveClass(name){
    return classnames([ this.props.master.dataset.name === name ? "active" : ""]);
  }

  render() {
    const list = this.props.master.datasets.map((d, i) => {
      return <li className={ this.getActiveClass(d.name) } key={i} onClick={ this.handleClick.bind(this, d.name) }>{ d.name }<span className="info">{ d.data.length } Länder</span></li>;
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
