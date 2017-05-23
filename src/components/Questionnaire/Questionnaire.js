import React, { PropTypes } from 'react';

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

  // componentDidUpdate(prevProps) {
  //   const { app, questions } = this.props;
  //   if (app.mobile && prevProps.questions !== questions) {
  //     const card = d3.select(this.refs.card);
  //     card.selectAll('img').on('load', () => {
  //       this.resizeWindow();
  //     });
  //     this.resizeWindow();
  //   }
  //   if (app.mobile && prevProps.questions.activeCard !== questions.activeCard) {
  //     const iframeTop = window.frameElement.getBoundingClientRect().top;
  //     const scrollTop = window.parent.pageYOffset || parent.document.documentElement.scrollTop;
  //     // d3
  //     //   .transition()
  //     //   .duration(500)
  //     //   .tween('scroll', this.scrollTween(iframeTop + scrollTop));
  //     window.parent.scrollTo(0, iframeTop + scrollTop);
  //   }
  // }

  render() {
    const { questions } = this.props;
    const { hideCard } = questions;

    if (questions.validationError) {
      return <Error>{ questions.validationError.message }</Error>;
    }

    if (questions.cards.length === 0) {
      return <div />;
    }

    if (hideCard) {
      return (
        <ShowCardButton { ...this.props }/>
      )
    }

    return (
      <div ref="card" className={ styles.questions } >
        <Card { ...this.props }/>
      </div>
    );
  }
}
