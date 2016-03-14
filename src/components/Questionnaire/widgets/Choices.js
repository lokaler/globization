import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

@cssModules()
export default class Choices extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
  }

  onChange = (evt) => {
    const activeValue = evt.target.value;
    this.props.actions.updateUserInput(this.props.id, activeValue);
  }

  isActiveRadio(activeValue) {
    const currUserInput = this.props.questions.inputs[this.props.id];
    return currUserInput &&
      typeof currUserInput.value !== 'undefined' &&
      currUserInput.value === activeValue;
  }

  createRadioButton(option, index) {
    const { id, app } = this.props;
    const isSelected = this.isActiveRadio(option[0]);
    const key = `${ id }_i${ index }`;
    const value = option[0];
    const label = option[1][app.language];

    return (
      <div key={ key }>
        <input type="radio" value={ value } onChange={ this.onChange } checked={ isSelected }/>
        <span styleName="choice-label">{ label }</span>
      </div>
    );
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
