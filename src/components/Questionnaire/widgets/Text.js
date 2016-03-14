import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';
import cssModules from 'react-css-modules';

@cssModules()
export default class Text extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    app: PropTypes.object.isRequired
  }

  render() {
    const { data, id, app } = this.props;
    return (
      <div styleName="widget" key={ id }>
        <ReactMarkdown source={ data[app.language].toString() } />
      </div>
    );
  }
}
