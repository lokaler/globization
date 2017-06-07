import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import translate from 'logic/translate';

export default class Text extends React.Component {

  static propTypes = {
    text: PropTypes.object.isRequired,
  }

  render() {
    const text = translate(this.props.text).join('\n');

    return (
      <div>
        <ReactMarkdown
          source={ text }
          renderers={{ Link: props => <a href={props.href} rel="noopener noreferrer" target="_blank">{props.children}</a> }}
        />
      </div>
    );
  }
}
