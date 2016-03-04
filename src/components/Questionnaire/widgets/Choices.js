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

  onChange(activeIndex) {
    this.props.actions.updateUserInput(this.props.id, activeIndex);
  }

  isActiveRadio(index) {
    const currUserInput = this.props.questions.inputs[this.props.id];
    return currUserInput &&
      typeof currUserInput.value !== 'undefined' &&
      currUserInput.value === index;
  }

  createRadioButton(option, index) {
    const boundRadioChange = this.onChange.bind(this, index);
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
    const options = [...this.props.data.options.choices];
    const Radios = options.map(this.createRadioButton.bind(this));

    return (
      <div key={this.props.id} styleName="widget">
        {Radios}
      </div>
    );
  }
}
