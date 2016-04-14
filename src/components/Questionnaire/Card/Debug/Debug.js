import React, { PropTypes } from 'react';
import store from 'store';
import styles from './Debug.scss';


export default class Questionnaire extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired
  }

  onClickState = () => {
    if (__DEV__) {
      /* eslint-disable no-console */
      console.clear();
      console.debug(store.getState());
      /* eslint-enable */
    }
  }

  onChangeCheckbox = (e) => {
    const debug = e.target.checked;
    this.props.actions.setDebugExpression(debug);
  }

  render() {
    const { questions } = this.props;
    const activeCard = questions.activeCard;
    const cardKey = (questions.cards[activeCard] || {}).key;
    const checked = questions.debugExpressions;
    return (
      <div className={ styles.component }>
        <span>card: "{ cardKey }"</span>
        &nbsp;&nbsp;&nbsp;
        <input type="checkbox" checked={ checked } onChange={ this.onChangeCheckbox }/>debug
        &nbsp;&nbsp;&nbsp;
        <span onClick={ this.onClickState }>show state</span>
      </div>
    );
  }
}
