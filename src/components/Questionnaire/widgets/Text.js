/* eslint-disable */

import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';

export default class Text extends React.Component {

  static propTypes = {
    data: PropTypes.string.isRequired
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="question-widget-text">
        <ReactMarkdown source={this.props.data.toString()} />
      </div>
    );
  }
}
