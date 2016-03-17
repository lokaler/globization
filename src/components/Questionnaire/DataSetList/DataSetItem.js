import React, { PropTypes } from 'react';
import classnames from 'classnames';
import translate from 'logic/translate';

export default class DataSetItem extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired,
    dataset: PropTypes.object.isRequired
  };

  handleClick = () => {
    const key = this.props.dataset.key;
    this.props.actions.setDataSet(key);
  }

  render() {
    const { master, dataset } = this.props;
    const className = classnames(master.dataset.key === dataset.key && 'active');
    return (
      <li className={ className } onClick={ this.handleClick }>
        { translate(dataset.name) }
        <span className="info">{ dataset.data.length } { translate('countries') }</span>
      </li>
    );
  }
}
