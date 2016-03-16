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

    const templateKey = this.getTemplateKey(questions.inputs);

    // nonexisting default template is ok
    if (templateKey === 'default' && !('default' in data.templates)) {
      return null;
    }

    // nonexisting template referenced in an expression is an error
    let template = data.templates[templateKey];
    if (isUndefined(template)) {
      throw new Error(`Missing template "${ templateKey }"`);
    }

    template = translate(template);
    const ctx = compileContext.bind(this)(data.answerContext, questions.inputs);
    const answerContent = MicroMustache.render(template, ctx);
    return (
      <div className="answer" key={ id } styleName="widget">
        <ReactMarkdown source={ answerContent.toString() } />
      </div>
    );
  }
}
