import React, { PropTypes } from 'react';

export default class Answer extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
        *** Answer
      </div>
    );
  }
}
