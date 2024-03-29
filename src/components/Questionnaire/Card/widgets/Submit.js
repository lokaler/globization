import React, { PropTypes } from 'react';
import { every } from 'lodash';
import translate from 'logic/translate';


export default class Submit extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    card: PropTypes.object.isRequired,
    submit: PropTypes.object.isRequired
  }

  onClick = () => {
    const { actions, card, submit } = this.props;
    actions.quizSubmitCard(card.key);
    actions.updateUserInput(submit.key, true);
  }

  render() {
    const { card, questions } = this.props;
    const { inputValues } = questions;
    const inputs = card.content
      .filter(widget => 'input' in widget)
      .map(widget => widget.input);

    const submitted = card.key in questions.submittedCards;
    const inputsEntered = every(inputs, input => input.key in inputValues);
    const showButton = !submitted && inputsEntered;

    if (showButton) {
      return <button onClick={ this.onClick }>{ translate('submit') }</button>;
    }

    return null;
  }
}
