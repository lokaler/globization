import React, { PropTypes } from 'react';


export default class Questionnaire extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <h3>Questionnaire</h3>
      </div>
    );
  }
}
