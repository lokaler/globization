import React, { PropTypes } from 'react';
import { every } from 'lodash';
import translate from 'logic/translate';
import { googleLogger } from 'logic/logging';

export default class SubmitButton extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    card: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { progress: 0 };
  }

  componentDidMount() {

  }

  onClick = () => {
    const { actions, card } = this.props;
    actions.quizSubmitCard(card.key);
    actions.updateUserInput(card.key, true);
    googleLogger('answered');
  }

  render() {
    const { card, questions } = this.props;
    const { inputValues } = questions;
    const inputs = card.content
      .filter(widget => 'input' in widget)
      .map(widget => widget.input);

    const inputsEntered = every(inputs, input => input.key in inputValues);

    if (inputsEntered) {
      return (
        <button onClick={ this.onClick }>{ translate('submit') }</button>
      );
    }

    return null;
  }
}
