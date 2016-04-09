import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';
import MicroMustache from 'micromustache';
import cssModules from 'react-css-modules';
import { compileExpression, compileContext } from 'logic/questionnaire';
import translate from 'logic/translate';
import { isUndefined } from 'lodash';
import classNames from 'classnames';

@cssModules()
export default class AnswerQuiz extends React.Component {

  static propTypes = {
    answerQuiz: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  onClick() {
    this.props.actions.updateUserInput(this.props.answerQuiz.key, true);
  }

  getTemplateKey(userInput) {
    for (const expr of this.props.answerQuiz.answerKey) {
      const func = compileExpression(expr);
      const templateKey = func(userInput);
      if (templateKey) {
        return templateKey;
      }
    }
    return 'default';
  }

  runActions(userInput) {
    for (const expr of this.props.answerQuiz.actions) {
      const func = compileExpression(expr);
      func(userInput);
    }
  }

  render() {
    const { answerQuiz, questions } = this.props;
    const type = this.props.answerQuiz.type;
    const templateKey = this.getTemplateKey(questions.inputValues);
    const answered = questions.inputValues[this.props.answerQuiz.key];

    if (answered) {
      this.runActions(questions.inputValues);
    }

    // nonexisting default template is ok
    if (templateKey === 'default' && !('default' in answerQuiz.templates)) {
      return null;
    }

    // nonexisting template referenced in an expression is an error
    let template = answerQuiz.templates[templateKey];
    if (isUndefined(template)) {
      throw new Error(`Missing template "${ templateKey }"`);
    }

    template = translate(template).join('\n');

    const ctx = compileContext(answerQuiz.answerContext, questions.inputValues);

    for (const k of Object.keys(ctx)) {
      ctx[k] = translate(ctx[k]);
    }
    const answerContent = MicroMustache.render(template, ctx);
    const className = classNames('answer', answerQuiz.className
      && `answer-${ answerQuiz.className }`);

    let share = '';
    if (type === 'share') {
      share = <div className="share">bei Facebook teilen, bei Twitter teilen</div>;
    }

    const answerBind = templateKey !== 'default' ? this.onClick.bind(this) : null;

    return (
      <div className={ className } styleName="widget">
        { !answered ?
          <button onClick={ answerBind }>{ translate(answerQuiz.templates.default) }</button> :
          <ReactMarkdown
            source={ answerContent.toString() }
            renderers={{ Link: props => <a href={props.href} target="_blank">{props.children}</a> }}
          />
        }
        { share }
      </div>
    );
  }
}
