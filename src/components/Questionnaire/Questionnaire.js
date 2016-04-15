import React, { PropTypes } from 'react';

import Card from './Card/Card';
import Footer from './Footer/Footer';
import ShadowScrollbars from './ShadowScrollbars';
import Error from './Error/Error';
import translate from 'logic/translate';
import styles from './Questionnaire.scss';


export default class Questionnaire extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
  }

  render() {
    const { app, questions } = this.props;

    if (questions.validationError) {
      return <Error>{ questions.validationError.message }</Error>;
    }

    if (questions.cards.length === 0) {
      return <div />;
    }

    let nextBtnLabel = 'next';

    const activeCard = questions.activeCard;
    const lastCard = activeCard === questions.cards.length - 2;
    const veryLastCard = activeCard === questions.cards.length - 1;

    if (lastCard) {
      nextBtnLabel = 'last';
    } else if (veryLastCard) {
      nextBtnLabel = 'close';
    }

    const scrollHeight = app.mobile ? ((app.height * (1 - 0.3)) - 50) : app.height - 50;

    return (
      <div className={ styles.questions }>
        <ShadowScrollbars
          activeCard={ activeCard }
          style={{ width: '100%', height: scrollHeight }}
        >
          <div className={ styles.inner }>
            <Card { ...this.props }/>
          </div>
        </ShadowScrollbars>
        { questions.activeCard !== 0 &&
          <Footer
            nextBtnLabel={ translate(nextBtnLabel) }
            prevBtnLabel={ translate('prev') }
            { ...this.props }
          />
        }
      </div>
    );
  }
}
