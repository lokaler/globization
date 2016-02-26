/* eslint-disable */
import React, { PropTypes } from 'react';

import { create } from './ItemFactory';

export default class Questionnaire extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.actions.requestQuestionData('/data/questionnaire.json');
  }

  render() {
    const data = this.props.appState.questionData.map(create);
    console.log(data);
    return (
      <div className="questions">
        { data }
      </div>
    );
  }
}
