import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';
import MicroMustache from 'micromustache';
import cssModules from 'react-css-modules';
import { compileExpression, compileContext } from '../../../logic/questionnaire';
import translate from 'logic/translate';
import { isUndefined, isEmpty } from 'lodash';
import classNames from 'classnames';

@cssModules()
export default class Answer extends React.Component {

  static propTypes = {
    answer: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired
  }

  getTemplateKey(userInput) {
    for (const expr of this.props.answer.answerKey) {
      const templateKey = compileExpression(expr)(userInput);
      if (templateKey) {
        return templateKey;
      }
    }
    return 'default';
  }

  render() {
    const { answer, questions } = this.props;

    if (isUndefined(answer) || isEmpty(questions.inputs)) {
      return null;
    }

    const templateKey = this.getTemplateKey(questions.inputs);

    // nonexisting default template is ok
    if (templateKey === 'default' && !('default' in answer.templates)) {
      return null;
    }

    // nonexisting template referenced in an expression is an error
    let template = answer.templates[templateKey];
    if (isUndefined(template)) {
      throw new Error(`Missing template "${ templateKey }"`);
    }

    template = translate(template).join('\n');

    const ctx = compileContext(answer.answerContext, questions.inputs);
    for (const k of Object.keys(ctx)) {
      ctx[k] = translate(ctx[k]);
    }
    const answerContent = MicroMustache.render(template, ctx);
    const className = classNames('answer', answer.className && `answer-${ answer.className }`);
    return (
      <div className={ className } styleName="widget">
        <ReactMarkdown
          source={ answerContent.toString() }
          renderers={{ Link: props => <a href={props.href} target="_blank">{props.children}</a> }}
        />
      </div>
    );
  }
}
