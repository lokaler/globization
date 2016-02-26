import React, { PropTypes } from 'react';

export default class Choices extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    const options = { ...this.props.data.options };
    const debug = `*** Choices: ${JSON.stringify(options)}`;

    return (
      <div>
        {debug}
      </div>
    );
  }
}
