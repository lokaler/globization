import React, { PropTypes } from 'react';


export default class Globe extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <h3>Globe</h3>
      </div>
    );
  }
}
