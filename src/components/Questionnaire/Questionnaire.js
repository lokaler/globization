import React from 'react';
import PropTypes from 'prop-types'
import Card from './Card/Card';
import Error from './Error/Error';
import styles from './Questionnaire.css';

export default class Questionnaire extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
  }

  cardDummys(size) {
    const cards = Array(size +1).fill(0).map((c,i) => <div key={i} className={`card${i}`}/>)
    return cards;
  }

  render() {
    const { questions, app } = this.props;
    const { hideCard, cards, activeCard } = questions;
    const totalCards = cards.length-1-activeCard;

    console.log(questions, totalCards)

    if (activeCard === null){
      return null
    }

    if (questions.validationError) {
      return <Error>{ questions.validationError.message }</Error>;
    }

    return (
      <div className={hideCard ? 'inactive': ''}>
        <div className={ styles.questions } >
          <Card { ...this.props }/>
        </div>
        { !app.mobile && totalCards > 0 && false && 
          this.cardDummys(totalCards)
        }
      </div>
    );
  }
}
