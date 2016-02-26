import React, { PropTypes } from 'react';

export default class Slider extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    const options = { ...this.props.data.options };
    const debug = `*** Slider: min=${options.min}, max=${options.max}, start=${options.start}`;

    return (
      <div>
        {debug}
      </div>
    );
  }
}
