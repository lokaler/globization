/* eslint-disable */

import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.scss';


@cssModules(styles)
export default class DataSetList extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired
  };

  componentDidMount() {

  }

  handleClick(id) {
    this.props.actions.setDataSet(id);
  }

  render() {
    const list = this.props.master.datasets.map((d, i) => {
      return <li key={i} onClick={ this.handleClick.bind(this, i) }>{ d.name }</li>;
    });

    return (
      <div className="DataSetList">
        <h5>DataSets</h5>
        <ul>
          { list }
        </ul>
      </div>
    );
  }
}