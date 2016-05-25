import React, { PropTypes } from 'react';
import DataSetItem from './DataSetItem';
import styles from './DataSetList.scss';

export default class DataSetList extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired
  };

  render() {
    const datasets = this.props.questions.datasets;
    const displayDatasets = datasets.filter(d =>
      d.linkedSet ? d.linkedSet[0].key === d.key : true && d.key !== 'none'
    );

    return (
      <div className={ styles.component }>
        <ul>
          { displayDatasets.map(
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
