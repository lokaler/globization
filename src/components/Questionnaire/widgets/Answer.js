/* eslint-disable */

import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

@cssModules()
export default class Answer extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    questions: PropTypes.object.isRequired
  }

  getTemplateKey(inputs) {
    return 'meat';
  }

  getTemplate() {
    const templateKey = this.getTemplateKey(this.props.questions.inputs);
    return this.props.data.templates[templateKey];
  }

  render() {
    const Template = this.getTemplate();

    return (
      <div key={this.props.id} styleName="widget">
      { Template }
      </div>
    );
  }
}