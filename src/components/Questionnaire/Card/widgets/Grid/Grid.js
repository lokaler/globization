import React from 'react';
import { PropTypes as PT } from 'prop-types'

export default class Matrix extends React.Component {

  static propTypes = {
    actions: PT.object.isRequired,
    questions: PT.object.isRequired,
    // --- for this component only ---
    id: PT.string.isRequired,
    options: PT.object.isRequired,
    disabled: PT.bool.isRequired
  }


  render() {
    const { questions, id, options, disabled } = this.props;
    console.log(this.props)

    return (
      <div>
        Matrix
      </div>
    );
  }
}
