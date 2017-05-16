import React, { PropTypes } from 'react';
import { sponLogger } from 'logic/logging';
import { logbuch } from 'logic/logbuch';
import { fromPairs } from 'lodash';
import styles from './Footer.css';
import { googleLogger } from 'logic/logging';


export default class Footer extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    label: PropTypes.string
  }

  /* eslint-disable */

  getClickHandler(cardIndex) {
    const { questions, actions } = this.props;
    if (cardIndex !== questions.activeCard) {
      return () => {
        if (
          cardIndex < questions.cards.length
          && cardIndex > -1
        ) {
          this.sendLogbuch();
        }
        else {
          cardIndex = 0;
        }
        googleLogger('card', cardIndex);
        sponLogger();
        const datasetId = questions.cards[cardIndex].dataset;
        if(questions.hideCard){
          actions.setCard(cardIndex, datasetId);
        } else {
          actions.hideCard();
        }
      };
    }
  }

  sendLogbuch(){
    // console.log(this.props);

    const { questions } = this.props;
    const card = questions.cards[questions.activeCard];

    const inputs = card.content
      .filter(widget => 'input' in widget)
      .map(widget => widget.input)
      .map(widget => ([ widget.key, questions.inputValues[widget.key] ]))

    // console.log(inputs, fromPairs(inputs));

    logbuch(fromPairs(inputs));
  }



  render() {
    const { questions, label } = this.props;
    const showBtn = (questions.activeCard < questions.cards.length) && (questions.activeCard !== -1);
    const card = questions.cards[questions.activeCard]
    const cardSubmitted = card.key in questions.submittedCards;

    return (
      <div className={ styles.footer }>
        { showBtn && cardSubmitted &&
            <div className={ styles.btn } onClick={ this.getClickHandler(questions.activeCard + 1) }>
              <div>{ label }</div>
            </div>
        }
      </div>
    );
  }
}
