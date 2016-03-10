import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

@cssModules()
export default class Footer extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired,
    btnLabel: PropTypes.string
  }

  getClickHandler(cardIndex) {
    return (cardIndex !== this.props.questions.activeCard) ? () => {
      let dataId = null;
      if (cardIndex < this.props.questions.questionData.length) {
        dataId = this.props.questions.questionData[cardIndex]
          .filter(d => d.type === 'dataset')[0].data;
      }

      // const dataId = this.props.questions.questionData[cardIndex]
      this.props.actions.setCard(cardIndex, dataId);
    } : null;
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
    const showPagination = questions.activeCard >= 0
      && questions.activeCard < questions.questionData.length;

    const pagination = showPagination ? this.createPagination
        .bind(this)(questions) : null;

    return (
      <div styleName="footer">
        { showPagination && <div styleName="pagination" className="clearfix">{ pagination }</div> }
        { showNextBtn ?
          <div styleName="btn-next" onClick={ this.getClickHandler(questions.activeCard + 1) }>
            <div styleName="btn-text">{ this.props.btnLabel || 'Weiter' }</div>
            <div styleName="btn-arrow"></div>
          </div> : null
        }
      </div>
    );
  }
}
