/* eslint-disable */

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import translate from 'logic/translate';

export default class LinkedDatasetItem extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    link: PropTypes.object.isRequired
  };

  handleClick = () => {
    console.log(this.props)
    const key = this.props.link.key;
    this.props.actions.setDataSet(key);
  }

  render() {
    const { link } = this.props;
    const className = classnames([link.value, link.key === dataset.key ? "active" : ""]);
    return (
      <div
        key={d.key}
        className={ className }
        onClick={ this.handleClick }
      ></div>
    );
  }
}
