import React from 'react';
import PropTypes from 'prop-types'
import Option from './Option'
import style from './Grid.css';

export default class Grid extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    // --- for this component only ---
    id: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    disabled: PropTypes.bool.isRequired
  }

  setValue = (value) => {
    const { id, actions, card } = this.props;
    actions.updateUserInput(id, value);
    actions.quizSubmitCard(card.key);
    actions.updateUserInput(card.key, true);
    // googleLogger('choice');
  }

  render() {
    const { source, questions, id, options, disabled, grid } = this.props;

    if(disabled) return null

    return (
      <div className={style.container}>
        <div className="options">
          <img src={source} alt="grid" />
          {
            options.choices.map(entry => {
              return <Option {...entry} onClick={this.setValue} key={entry.position} />
            })
          }
        </div>
      </div>
    );
  }
}
