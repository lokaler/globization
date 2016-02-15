import React, { PropTypes } from 'react';

const UbermorgenApp = function UbermorgenApp(props) {
  const settings = props.appState;

  return (
    <div>
      <h1 {...settings}>UbermorgenApp</h1>
    </div>
  );
};

UbermorgenApp.propTypes = {
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired
};

export default UbermorgenApp;
