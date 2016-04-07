import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import translate from 'logic/translate';

@cssModules()
export default class Choices extends React.Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired
  }

  onChange = (evt) => {
    const activeValue = evt.target.value;
    this.props.actions.updateUserInput(this.props.id, activeValue);
  }

  onClick(activeValue) {
    this.props.actions.updateUserInput(this.props.id, activeValue);
  }

  isActiveRadio(activeValue) {
    const currUserInput = this.props.questions.inputValues[this.props.id];
    return currUserInput &&
      typeof currUserInput.value !== 'undefined' &&
      currUserInput.value === activeValue;
  }

  createRadioButton(option, index) {
    const { id } = this.props;
    const isSelected = this.isActiveRadio(option[0]);
    const key = `${ id }_${ index }`;
    const value = option[0];
    const label = translate(option[1]);
    const boundOnClick = this.onClick.bind(this, value);

    return (
      <div key={ key } onClick={ boundOnClick } style={{ cursor: 'pointer' }}>
        <input type="radio" value={ value } onChange={ this.onChange } checked={ isSelected }/>
        <span styleName="choice-label">{ label }</span>
      </div>
    );
  }

  render() {
    const choices = [...this.props.options.choices];
    const Radios = choices.map(this.createRadioButton.bind(this));

    return (
      <div styleName="widget">
        { Radios }
      </div>
    );
  }
}
