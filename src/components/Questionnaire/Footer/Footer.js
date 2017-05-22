import React, { PropTypes } from 'react';
import { sponLogger } from 'logic/logging';
import { createLogbuchEntry } from 'logic/logbuch';
import styles from './Footer.css';
import { googleLogger } from 'logic/logging';
import translate from 'logic/translate';
import SubmitButton from './SubmitButton'

export default class Footer extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
  }

  /* eslint-disable */

  handleNextClick = () => {
    const { questions, actions } = this.props;
    let cardIndex = questions.activeCard + 1;
    
    if (cardIndex < questions.cards.length && cardIndex > -1) {
      createLogbuchEntry(questions);
    } else { 
      cardIndex = 0;
    }

    googleLogger('card', cardIndex);
    sponLogger();

    const datasetId = questions.cards[cardIndex].dataset;
    if(cardIndex == 1 || questions.hideCard){
      actions.setCard(cardIndex, datasetId);
    } else {
      actions.hideCard();
    }
  }

  render() {
    const { questions } = this.props;
    const activeCard = questions.activeCard;
    const showBtn = activeCard < questions.cards.length;
    const card = questions.cards[activeCard]
    const cardSubmitted = card.key in questions.submittedCards;

    const firstCard = activeCard === 0;
    const lastCard = activeCard === questions.cards.length - 2;
    const veryLastCard = activeCard === questions.cards.length - 1;
    let label = 'next';

    if (lastCard) {
      label = questions.options.lastButtonLabel || 'last';
    } else if (veryLastCard) {
      label = 'close';
    } else if (firstCard) {
      label = 'lets go';
    }

    if(!showBtn){
      return null;
    }

    return (
      <div className={ styles.footer }>
        { !cardSubmitted && !firstCard &&
          <SubmitButton { ...this.props } card={ card } />
        }
        { (cardSubmitted || firstCard) &&
          <div className={ styles.btn } onClick={ this.handleNextClick }>
            <div>{ translate(label) }</div>
          </div>
        }
      </div>
    );
  }
}
