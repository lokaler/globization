import React, { PropTypes } from 'react';

import Card from './Card/Card';
import Footer from './Footer/Footer';
// import ShadowScrollbars from './ShadowScrollbars';
import Error from './Error/Error';
import translate from 'logic/translate';
import styles from './Questionnaire.scss';
import d3 from 'd3';
// import renderIf from 'render-if';

export default class Questionnaire extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
  }

  componentDidUpdate(prevProps) {
    const { app, questions } = this.props;
    if (app.mobile && prevProps.questions !== questions) {
      const card = d3.select(this.refs.card);
      card.selectAll('img').on('load', () => {
        this.resizeWindow();
      });
      this.resizeWindow();
    }
    if (app.mobile && prevProps.questions.activeCard !== questions.activeCard) {
      const iframeTop = window.frameElement.getBoundingClientRect().top;
      const scrollTop = window.parent.pageYOffset || parent.document.documentElement.scrollTop;
      // d3
      //   .transition()
      //   .duration(500)
      //   .tween('scroll', this.scrollTween(iframeTop + scrollTop));
      window.parent.scrollTo(0, iframeTop + scrollTop);
    }
  }

  resizeWindow() {
    const card = d3.select(this.refs.card);
    const bbox = card.node().getBoundingClientRect();
    const height = 250 + bbox.height + 50;
    d3.select(window.frameElement)
      // .transition()
      // .duration(500)
      .style('height', `${height}px`);
  }

  scrollTween(offset) {
    return () => {
      const i = d3.interpolateNumber(
        window.parent.pageYOffset || parent.document.documentElement.scrollTop, offset
      );
      return (t) => { window.parent.scrollTo(0, i(t)); };
    };
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
      const label = questions.options.lastButtonLabel;
      nextBtnLabel = label || 'last';
    } else if (veryLastCard) {
      nextBtnLabel = 'close';
    }

    const scrollHeight = !app.mobile ? { height: app.height - 50 } : null;

    return (
      <div className={ styles.questions }>
        <div ref="card" className={ styles.inner } style={ scrollHeight }>
          <Card { ...this.props }/>
        </div>
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
