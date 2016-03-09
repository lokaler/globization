/*eslint-disable*/
import React, { PropTypes } from 'react';
import MicroMustache from 'micromustache';
import cssModules from 'react-css-modules';
import * as Logic from '../../../logic/questionnaire';
import { isEmpty } from 'lodash';

@cssModules()
export default class Answer extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    questions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired
  }

  getTemplate(templates, userInput) {
    const templateKey = this.findTemplateKey(userInput);
    return templates[templateKey];
  }

  findTemplateKey(userInput) {
    let templateKey = 'default';
    this.props.data.answerKey.forEach((expr) => {
      if (templateKey === 'default') {
        try {
          const result = Logic.compileExpression(expr)(userInput);
          if (result) {
            templateKey = result;
          }
        } catch (e) {
          // console.log(e);
        }
      }
    });

    return templateKey;
  }

  render() {
    if (typeof this.props.data === 'undefined' || isEmpty(this.props.questions.inputs)) {
      return null;
    }

    const questions = { ...this.props.questions };
    const data = { ...this.props.data };

    const template = this.getTemplate(data.templates, questions.inputs);
    const templateContext = Logic.compileContext.bind(this)(data.answerContext, questions.inputs);
    const answerContent = MicroMustache.render(template, templateContext);

    return (
      <div key={ this.props.id } styleName="widget">
      { answerContent }
      </div>
    );
  }
}
