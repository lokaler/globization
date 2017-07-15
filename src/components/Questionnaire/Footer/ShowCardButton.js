import React from 'react';
import PropTypes from 'prop-types';
import translate from 'logic/translate';
import styles from './Footer.css';

export default class ShowCardButton extends React.PureComponent {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
  }


  onClick = () => {
    const { actions, questions } = this.props;
    let cardIndex = questions.activeCard + 1;
    if(cardIndex >= questions.cards.length) cardIndex = 0
    actions.setCard(cardIndex);
  }

  render() {

    return (
      <div className={ styles.showcard } onClick={ this.onClick }>
        <div>{ translate('next') }</div>
      </div>
    );
  }
}
