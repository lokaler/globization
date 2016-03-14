import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

@cssModules()
export default class Footer extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired,
    nextBtnLabel: PropTypes.string,
    prevBtnLabel: PropTypes.string
  }

  getClickHandler(cardIndex) {
    const { questions, actions } = this.props;
    if (cardIndex !== questions.activeCard) {
      return () => {
        let dataId = null;
        if (
          cardIndex < questions.questionData.length
          && cardIndex > -1
        ) {
          dataId = questions.questionData[cardIndex].dataset;
        }
        actions.setCard(cardIndex, dataId);
      };
    }
  }

  createPagination(questions) {
    return questions.questionData.map((q, i) =>
      <div
        key={ `${i}_pagination-item` }
        styleName={ i === questions.activeCard ? 'pagination-item--active' : 'pagination-item' }
        onClick={ this.getClickHandler(i) }
      />
    );
  }

  render() {
    const { questions } = this.props;
    const showNextBtn = questions.activeCard < questions.questionData.length;
    const showPrevBtn = questions.activeCard > -1;
    const showPagination = questions.activeCard >= 0
      && questions.activeCard < questions.questionData.length;

    const pagination = showPagination ? this.createPagination
        .bind(this)(questions) : null;

    return (
      <div styleName="footer">
        {
          showPrevBtn &&
          <div styleName="btn-prev" onClick={ this.getClickHandler(questions.activeCard - 1) }>
            <div styleName="btn-arrow"></div>
            <div styleName="btn-text">{ this.props.prevBtnLabel || 'Weiter' }</div>
          </div>
        }
        { showPagination && <div styleName="pagination" className="clearfix">{ pagination }</div> }
        { showNextBtn && questions.activeCard !== -1 &&
            <div styleName="btn-next" onClick={ this.getClickHandler(questions.activeCard + 1) }>
              <div styleName="btn-text">{ this.props.nextBtnLabel || 'Weiter' }</div>
              <div styleName="btn-arrow"></div>
            </div>
        }
      </div>
    );
  }
}
