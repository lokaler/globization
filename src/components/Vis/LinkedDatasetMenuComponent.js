/* eslint-disable */

import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './vis.scss';
import translate from 'logic/translate';

@cssModules(styles)

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
