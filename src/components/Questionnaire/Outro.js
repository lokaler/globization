import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import { keys } from 'lodash';

@cssModules()
export default class Outro extends React.Component {

  static propTypes = {
    questions: PropTypes.object.isRequired
  }

  createSummary(answers) {
    return keys(answers).map(key =>
      <div key={ `${key}_answer_outro` }>
        <h3>{ key }</h3>
        <div>{ answers[key].value }</div>
      </div>
    );
  }

  render() {
    const summary = this.createSummary(this.props.questions.inputs);
    return (<div>
      <h1>Ihre Ergebnisse</h1>
      { summary }
    </div>);
  }

}
