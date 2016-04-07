import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';
import dedent from 'dedent-js';
import translate from 'logic/translate';

export default class TranslatedMarkdown extends React.Component {

  static propTypes = {
    text: PropTypes.object.isRequired
  }

  render() {
    let text = this.props.text;
    text = dedent(translate(text));
    return (
      <ReactMarkdown source={ text } />
    );
  }
}
