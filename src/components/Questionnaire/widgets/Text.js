import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';
import cssModules from 'react-css-modules';
import translate from 'logic/translate';

@cssModules()
export default class Text extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
  }

  render() {
    const { data, id } = this.props;
    return (
      <div styleName="widget" key={ id }>
        <ReactMarkdown source={ translate(data) } />
      </div>
    );
  }
}
