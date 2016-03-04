/* eslint-disable */

import React, { PropTypes } from 'react';

export default class Choices extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired
  }

  radioChange(activeIndex) {
    this.props.actions.updateUserInput(this.props.id, activeIndex);
  }

  isActiveRadio(index) {
    const currUserInput = this.props.questions.userInput[this.props.id];
    return typeof currUserInput !== 'undefined' && currUserInput === index;
  }

  createRadioButton(option, index) {
    const boundRadioChange = this.radioChange.bind(this, index);
    const isSelected = this.isActiveRadio(index);

    return (<div key={`${this.props.id}_i${index}`}>
        <input
          type="radio"
          name={index}
          value={option[0]}
          onChange={boundRadioChange}
          checked={isSelected}
        />
        {option[1]}
      </div>);
  }

  render() {
    const options = [...this.props.data.options];
    const Radios = options.map(this.createRadioButton.bind(this));

    return (
      <div key={this.props.id}>
        {Radios}
      </div>
    );
  }
}
