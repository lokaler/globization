/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './vis.css';
import translate from 'logic/translate';

export default class LinkedDatasetMenuComponent extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired
  };

  componentDidMount() {

  }


  render() {
    // console.log('render tooltip', this.props.vis.tooltip);


    return (
      <div className="linked menu">
        <div className="woman"></div>
        <div className="men"></div>
      </div>
    );
  }
}
