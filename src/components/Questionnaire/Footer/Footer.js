import React, { PropTypes } from 'react';
import { sponLogger } from 'logic/logging';
import { logbuch } from 'logic/logbuch';
import { fromPairs } from 'lodash';
import styles from './Footer.scss';


export default class Footer extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    nextBtnLabel: PropTypes.string,
    prevBtnLabel: PropTypes.string
  }

  /* eslint-disable */

  getClickHandler(cardIndex) {
    const { questions, actions } = this.props;
    if (cardIndex !== questions.activeCard) {
      return () => {
        let dataId = null;
        if (
          cardIndex < questions.cards.length
          && cardIndex > -1
        ) {
          dataId = questions.cards[cardIndex].dataset;
          this.sendLogbuch();
        }
        else {
          cardIndex = -1;
        }
        sponLogger();
        actions.setCard(cardIndex, dataId);
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

  createPagination(questions) {
    return questions.cards.map((q, i) =>
      <div
        key={ `${i}_pagination-item` }
        className={ i === questions.activeCard ? styles.pagination_item__active : styles.pagination_item }
        onClick={ this.getClickHandler(i) }
      />
    );
  }

  render() {
    const { questions, prevBtnLabel, nextBtnLabel } = this.props;
    const showNextBtn = questions.activeCard < questions.cards.length ;
    const showPrevBtn = questions.activeCard > -1 && questions.options.showBackButton;
    const showPagination = questions.activeCard >= 0
      && questions.activeCard < questions.cards.length;

    const pagination = showPagination ? this.createPagination
        .bind(this)(questions) : null;

    return (
      <div className={ styles.footer }>
        {
          showPrevBtn &&
          <div className={ styles.btn_prev } onClick={ this.getClickHandler(questions.activeCard - 1) }>
            <div className={ styles.btn_arrow }></div>
            <div className={ styles.btn_text }>{ prevBtnLabel }</div>
          </div>
        }
        { showPagination &&
          <div className={ styles.pagination + ' clearfix' }>{ pagination }</div>
        }
        { showNextBtn && questions.activeCard !== -1 &&
            <div className={ styles.btn_next } onClick={ this.getClickHandler(questions.activeCard + 1) }>
              <div className={ styles.btn_text }>{ nextBtnLabel }</div>
              <div className={ styles.btn_arrow }></div>
            </div>
        }
      </div>
    );
  }
}
