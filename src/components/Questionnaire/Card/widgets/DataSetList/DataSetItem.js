import React, { PropTypes } from 'react';
import classnames from 'classnames';
import translate from 'logic/translate';
import { googleLogger } from 'logic/logging';

export default class DataSetItem extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    dataset: PropTypes.object.isRequired
  };

  handleClick = () => {
    const key = this.props.dataset.key;
    this.props.actions.setDataSet(key);
    googleLogger('datasetlist', key);
  }

  render() {
    const { questions, dataset } = this.props;
    const activeDataset = questions.dataset;

    const active = (dataset.key === activeDataset.key) ||
      (activeDataset.linkedSet ? activeDataset.linkedSet[0].key === dataset.key : false);

    const className = classnames(active && 'active');

    return (
      <li className={ className } onClick={ this.handleClick }>
        { translate(dataset.name) }
        <span className="info">{ dataset.data.length } { translate('countries') }</span>
      </li>
    );
  }
}
