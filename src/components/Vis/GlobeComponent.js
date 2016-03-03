/* eslint-disable */

import React, { PropTypes } from 'react';

export default class GlobeComponent extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.actions.updatePaths([1, 2, 3, 4]);
  }

  render() {
    const paths = this.props.vis.paths.map((p, i) => <li key={i}>{p}</li>);

    return (
      <div>
        { this.props.master.master.length }
        <ul>
          {paths}
        </ul>
      </div>
    );
  }
}
