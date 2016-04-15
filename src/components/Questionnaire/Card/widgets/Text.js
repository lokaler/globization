import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';
import cssModules from 'react-css-modules';
import translate from 'logic/translate';
import styles from '../../Questionnaire.scss';

@cssModules(styles)
export default class Text extends React.Component {

  static propTypes = {
    text: PropTypes.object.isRequired,
  }

  render() {
    const text = translate(this.props.text).join('\n');

    return (
      <div styleName="widget">
        <ReactMarkdown
          source={ text }
          renderers={{ Link: props => <a href={props.href} target="_blank">{props.children}</a> }}
        />
      </div>
    );
  }
}
