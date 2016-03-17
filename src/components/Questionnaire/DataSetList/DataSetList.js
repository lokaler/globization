import React, { PropTypes } from 'react';
import DataSetItem from './DataSetItem';
import styles from './DataSetList.scss';

export default class DataSetList extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired
  };

  render() {
    const datasets = this.props.master.datasets;

    return (
      <div className={ styles.component }>
        <ul>
          { datasets.map(
            (dataset, idx) => (
              <DataSetItem
                key={ idx }
                dataset={ dataset }
                idx={ idx } { ...this.props }
              />
            )
          )}
        </ul>
      </div>
    );
  }
}
