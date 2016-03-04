import React, { PropTypes } from 'react';

export default class Answer extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    questions: PropTypes.object.isRequired
  }

  render() {
    return (
      <div key={this.props.id}>
        *** Answer
      </div>
    );
  }
}
