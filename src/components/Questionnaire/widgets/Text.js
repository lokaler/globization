import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';
import cssModules from 'react-css-modules';

@cssModules()
export default class Text extends React.Component {

  static propTypes = {
    data: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }

  render() {
    return (
      <div styleName="widget" key={this.props.id}>
        <ReactMarkdown source={this.props.data.toString()} />
      </div>
    );
  }
}
