import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

@cssModules()
export default class Choices extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired
  }

  onChange(activeValue) {
    this.props.actions.updateUserInput(this.props.id, activeValue);
  }

  isActiveRadio(activeValue) {
    const currUserInput = this.props.questions.inputs[this.props.id];
    return currUserInput &&
      typeof currUserInput.value !== 'undefined' &&
      currUserInput.value === activeValue;
  }

  createRadioButton(option, index) {
    const boundRadioChange = this.onChange.bind(this, option[0]);
    const isSelected = this.isActiveRadio(option[0]);

    return (<div key={`${this.props.id}_i${index}`}>
        <input
          type="radio"
          name={`${this.props.id}_${index}`}
          value={option[0]}
          onChange={boundRadioChange}
          checked={isSelected}
        />
        <span styleName="choice-label">{option[1]}</span>
      </div>);
  }

  render() {
    const options = [...this.props.data.options.choices];
    const Radios = options.map(this.createRadioButton.bind(this));

    return (
      <div key={this.props.id} styleName="widget">
        {Radios}
      </div>
    );
  }
}
