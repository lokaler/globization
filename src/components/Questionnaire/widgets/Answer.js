import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';
import MicroMustache from 'micromustache';
import cssModules from 'react-css-modules';
import { compileExpression, compileContext } from '../../../logic/questionnaire';
import translate from 'logic/translate';
import { isUndefined, isEmpty } from 'lodash';

@cssModules()
export default class Answer extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    questions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired
  }

  getTemplate(templates, userInput) {
    const templateKey = this.getTemplateKey(userInput);
    return templates[templateKey];
  }

  getTemplateKey(userInput) {
    for (const expr of this.props.data.answerKey) {
      const templateKey = compileExpression(expr)(userInput);
      if (templateKey) {
        return templateKey;
      }
    }
    return 'default';
  }

  render() {
    const { id, data, questions } = this.props;

    if (isUndefined(data) || isEmpty(questions.inputs)) {
      return null;
    }

    const template = translate(this.getTemplate(data.templates, questions.inputs));
    const ctx = compileContext.bind(this)(data.answerContext, questions.inputs);
    const answerContent = MicroMustache.render(template, ctx);

    return (
      <div className="answer" key={ id } styleName="widget">
        <ReactMarkdown source={ answerContent.toString() } />
      </div>
    );
  }
}
