/*eslint-disable*/
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import { map } from 'lodash';

@cssModules()
export default class Outro extends React.Component {

  static propTypes = {
    questions: PropTypes.object.isRequired
  }

  createSummary(answers) {
    return map(answers, (value) => <div>hello</div>);
  }

  render() {
    //const summary = this.createSummary(this.props.questions.inputs);

    return <div>Outro</div>;
  }

}
