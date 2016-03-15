/*eslint-disable*/
import React, { PropTypes } from 'react';
import MicroMustache from 'micromustache';
import objectAssign from 'object-assign';
import cssModules from 'react-css-modules';
import * as Logic from '../../../logic/questionnaire';
import { isUndefined, isEmpty } from 'lodash';

@cssModules()
export default class Answer extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    questions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
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
    const { id, data, questions, app } = this.props;

    if (isUndefined(data) || isEmpty(questions.inputs)) {
      return null;
    }

    const template = this.getTemplate(data.templates, questions.inputs)[app.language];
    const ctx = Logic.compileContext.bind(this)(data.answerContext, questions.inputs);
    const answerContent = MicroMustache.render(template, objectAssign({}, ctx, { inputs: questions.inputs }));

    return (
      <div key={ id } styleName="widget">
        { answerContent }
      </div>
    );
  }
}
