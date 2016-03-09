import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

@cssModules()
export default class Footer extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired
  }

  getClickHandler(cardIndex) {
    return (cardIndex !== this.props.questions.activeCard) ? () => {
      // this should not be hardcoded but read from questionnaire json
      // todo
      const dataId = 'Ewaste';
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
    const showNextBtn = questions.activeCard < questions.questionData.length - 1;

    const pagination = this.createPagination
      .bind(this)(questions);

    return (
      <div styleName="footer">
        <div styleName="pagination" className="clearfix">{ pagination }</div>
        { showNextBtn ?
          <div styleName="btn-next" onClick={ this.getClickHandler(questions.activeCard + 1) }>
            <div styleName="btn-text">Weiter</div>
            <div styleName="btn-arrow"></div>
          </div> : null
        }
      </div>
    );
  }
}
