import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';
import MicroMustache from 'micromustache';
// import cssModules from 'react-css-modules';
import { compileExpression } from 'logic/questionnaires/expressions';
import translate from 'logic/translate';
import { isUndefined, includes } from 'lodash';
import center from '../../../../../../node_modules/underscore.string/lrpad';
import classNames from 'classnames';
import Logger from './../logging';
import functions from 'logic/questionnaires/functions';
import styles from './Answer.css';

// @cssModules(styles)
export default class Answer extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    card: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    answer: PropTypes.object.isRequired
  }

  getLoggingFuncs() {
    const { actions, questions } = this.props;
    const logger = new Logger(actions, process.env.NODE_ENV === "development" && questions.debugExpressions);
    const { log, error } = logger;
    const logStart = (s) => {
      log(center(` ${ s } `, 80, '-'));
    };
    const logLine = (s = '-') => {
      const r = 80 / s.length;
      log(s.repeat(r));
    };
    const logEnd = () => {
      logLine();
      log('');
    };
    const logError = (info, err) => {
      error(...info, `${ err.name } ->`, err.message);
    };
    return { log, error, logLine, logStart, logEnd, logError };
  }

  getTemplateKey(inputValues, existingTemplateKeys) {
    const { log, logLine, logStart, logEnd, logError } = this.getLoggingFuncs();

    logStart('getTemplateKey()');
    log('i:', inputValues);
    log('f:', functions);
    log('existingTemplateKeys:', existingTemplateKeys);
    logLine('- ');

    let index = -1;
    for (const expr of this.props.answer.answerKey) {
      index++;

      let info = [`[${ index }]: "${ expr }"`];

      const { func, error } = this.compileExpression(expr);
      if (error) {
        logError(info, error);
        continue;
      }

      const { value, error_ } = this.runFunction(func, inputValues);
      if (error_) {
        logError(info, error_);
        continue;
      }

      info = [...info, '=', value];

      if (includes(existingTemplateKeys, value)) {
        log(...info, '- STOP');
        log('templateKey:', value);
        logEnd();
        return value;
      }

      log(...info);
    }

    log('templateKey:', 'default');
    logEnd();

    return 'default';
  }

  compileContext(context, inputValues) {
    const { log, logLine, logStart, logEnd, logError } = this.getLoggingFuncs();

    logStart('compileContext()');
    log('i:', inputValues);
    log('f:', functions);
    logLine('- ');

    const compiledContext = {};
    for (const [key, expr] of Object.entries(context)) {
      let info = [`[${ key }]: "${ expr }"`];

      const { func, error } = this.compileExpression(expr);
      if (error) {
        logError(info, error);
        continue;
      }

      const { value, error_ } = this.runFunction(func, inputValues);
      if (error_) {
        logError(info, error_);
        continue;
      }

      info = [...info, '=', value];
      log(...info);
      compiledContext[key] = value;
    }

    logEnd();
    return compiledContext;
  }

  compileExpression(expr) {
    try {
      return {
        func: compileExpression(expr),
        error: null
      };
    } catch (e) {
      return {
        func: null,
        error: { name: 'Compilation', message: e }
      };
    }
  }

  runFunction(func, inputValues) {
    try {
      return {
        value: func(inputValues),
        error_: null
      };
    } catch (e) {
      return {
        func: null,
        error_: { name: 'Runtime', message: e }
      };
    }
  }

  render() {
    const { card, answer, questions } = this.props;
    const debug = process.env.NODE_ENV === "development" && questions.debugExpressions;
    const cardSubmitted = card.key in questions.submittedCards;
    if (!cardSubmitted) {
      return null;
    }

    const existingTemplateKeys = Object.keys({ ...answer.templates, default: true });
    const templateKey = this.getTemplateKey(questions.inputValues, existingTemplateKeys);
    if (!templateKey) {
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

    const ctx = this.compileContext(answer.answerContext, questions.inputValues);
    for (const [key, value] of Object.entries(ctx)) {
      ctx[key] = translate(value);
      if (debug) {
        ctx[key] = `{{ ${ key }: "${ value }" }}`;
      }
    }
    const answerContent = MicroMustache.render(template, ctx);
    const className = classNames(
      styles.component,
      answer.className && `answer-${ answer.className }`
    );

    console.log(answer, questions);

    return (
      <div className={ className }>
        <div >
          { debug &&
            <span style={{ color: 'green' }}>template: "{ templateKey }"</span>
          }
          <ReactMarkdown
            source={ answerContent.toString() }
            renderers={{ Link: props => <a href={props.href} target="_blank">{props.children}</a> }}
          />
        </div>
      </div>
    );
  }
}
