import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';
import MicroMustache from 'micromustache';
import cssModules from 'react-css-modules';
import { compileExpression, compileContext } from 'logic/questionnaires/expressions';
import translate from 'logic/translate';
import { isUndefined, includes } from 'lodash';
import classNames from 'classnames';
import Logger from './logging';
import functions from 'logic/questionnaires/functions';

class ERROR {}

@cssModules()
export default class Answer extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    answer: PropTypes.object.isRequired
  }

  getLogger() {
    const { actions, questions } = this.props;
    return new Logger(actions, __DEV__ && questions.debugExpressions);
  }

  getTemplateKey(userInput, existingTemplateKeys) {
    const { log, error } = this.getLogger();
    function logEnd() {
      log('------------------------------------------------------------------------------');
      log('');
    }
    function logError(exprlog, errorType, errorMessage) {
      log(exprlog);
      error(`${ errorType } ->`, errorMessage);
      logEnd();
    }
    log('------------------------------ getTemplateKey() ------------------------------');
    log('i:', userInput);
    log('f:', functions);
    log('existingTemplateKeys:', existingTemplateKeys);

    let index = 0;
    for (const expr of this.props.answer.answerKey) {
      const exprlog = `[${ index }]: "${ expr }"`;

      let func;
      try {
        func = compileExpression(expr);
      } catch (e) {
        logError(exprlog, 'Compilation', e);
        return ERROR;
      }

      let templateKey;
      try {
        templateKey = func(userInput);
      } catch (e) {
        logError(exprlog, 'Compilation', e);
        return ERROR;
      }

      if (includes(existingTemplateKeys, templateKey)) {
        log(exprlog, '=', templateKey);
        log('templateKey:', templateKey);
        logEnd();
        return templateKey;
      }

      log(exprlog, '=', templateKey);

      index++;
    }

    log('templateKey:', 'default');
    logEnd();

    return 'default';
  }

  render() {
    const { answer, questions } = this.props;

    const existingTemplateKeys = Object.keys({ ...answer.templates, default: true });
    const templateKey = this.getTemplateKey(questions.inputValues, existingTemplateKeys);

    if (templateKey === ERROR) {
      return null;
    }

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

    const ctx = compileContext(answer.answerContext, questions.inputValues);
    for (const k of Object.keys(ctx)) {
      ctx[k] = translate(ctx[k]);
    }
    const answerContent = MicroMustache.render(template, ctx);
    const className = classNames('answer', answer.className && `answer-${ answer.className }`);

    return (
      <div className={ className } styleName="widget">
        <div >
          <ReactMarkdown
            source={ answerContent.toString() }
            renderers={{ Link: props => <a href={props.href} target="_blank">{props.children}</a> }}
          />
        </div>
      </div>
    );
  }
}
