import React, { PropTypes } from 'react';
import styles from './RoundList.scss';
import translate from 'logic/translate';

export default class RoundList extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired
  };

  onChange = (evt) => {
    const { actions } = this.props;
    const questionnaireKey = evt.target.value;
    actions.setQuestionnaire(questionnaireKey);
    actions.resetQuestionnaire();
  }

  render() {
    const { questionnaires, activeQuestionnaireId } = this.props.questions;
    const rounds = Object.entries(questionnaires).map((item) => {
      const [key, questionnaire] = item;
      return (
        <option key={ key } value={ key }>
          { translate(questionnaire.title) }
        </option>
      );
    });

    return (
      <div className={ styles.component }>
        <div className="theme">
          <span className="info">{ translate('topic') }:</span>
          <select className="dropdown" value={ activeQuestionnaireId } onChange={ this.onChange }>
            { rounds }
          </select>
        </div>
      </div>
    );
  }
}
