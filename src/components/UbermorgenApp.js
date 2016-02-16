import React, { PropTypes } from 'react';

class UbermorgenApp extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
  };

  render() {
    const appState = this.props.appState;

    return (
      <div>
        <h1 {...appState}>UbermorgenApp</h1>
      </div>
    );
  }
}

export default UbermorgenApp;
