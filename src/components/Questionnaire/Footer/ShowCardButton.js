import React, { PropTypes } from 'react';
import { every } from 'lodash';
import translate from 'logic/translate';
import { googleLogger } from 'logic/logging';
import styles from './Footer.css';

export default class ShowCardButton extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
  }


  onClick = () => {
    const { actions, questions } = this.props;
    const cardIndex = questions.activeCard + 1;
    const datasetId = questions.cards[cardIndex].dataset;
    actions.setCard(cardIndex, datasetId);
  }

  render() {

    return (
      <div className={ styles.showcard } onClick={ this.onClick }>
        <div>{ translate('next') }</div>
      </div>
    );
  }
}
