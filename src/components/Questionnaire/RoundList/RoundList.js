import React, { PropTypes } from 'react';
import styles from './RoundList.scss';

export default class RoundList extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired
  };

  onChange = (evt) => {
    const questionnaireKey = evt.target.value;
    this.props.actions.setQuestionnaire(questionnaireKey);
  }

  render() {
    const { questionnaires, activeQuestionnaireId } = this.props.questions;
    const rounds = Object.entries(questionnaires).map((item) => {
      const [key, questionnaire] = item;
      return (
        <option key={ key } value={ key }>
          {questionnaire.title}
        </option>
      );
    });

    return (
      <div className={ styles.component }>
        <div className="theme">
          <span className="info">Thema:</span>
          <select className="dropdown" value={ activeQuestionnaireId } onChange={ this.onChange }>
            { rounds }
          </select>
        </div>
      </div>
    );
  }
}
