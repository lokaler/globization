import React, { PropTypes } from 'react';

export default class Choices extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
  }

  render() {
    const options = { ...this.props.data.options };
    const debug = `*** Choices: ${JSON.stringify(options)}`;

    return (
      <div key={this.props.id}>
        {debug}
      </div>
    );
  }
}
