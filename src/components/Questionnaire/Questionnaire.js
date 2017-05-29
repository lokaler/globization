import React from 'react';
import PropTypes from 'prop-types'
import Card from './Card/Card';
import Error from './Error/Error';
import styles from './Questionnaire.css';
import ShowCardButton from './Footer/ShowCardButton';

export default class Questionnaire extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
  }

  render() {
    const { questions } = this.props;
    const { hideCard } = questions;

    if (questions.validationError) {
      return <Error>{ questions.validationError.message }</Error>;
    }

    if (hideCard) {
      return (
        <ShowCardButton { ...this.props }/>
      )
    }

    return (
      <div className={ styles.questions } >
        <Card { ...this.props }/>
      </div>
    );
  }
}
