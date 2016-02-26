import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';

export default class Text extends React.Component {

  static propTypes = {
    data: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="question-widget-text" key={this.props.id}>
        <ReactMarkdown source={this.props.data.toString()} />
      </div>
    );
  }
}
