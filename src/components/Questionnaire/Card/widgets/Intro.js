import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import translate from 'logic/translate';
import styles from './Intro.css';

export default class Intro extends React.Component {

  static propTypes = {
    intro: PropTypes.object.isRequired,
  }

  render() {
    const text = translate(this.props.intro).join('\n');
    const { questions } = this.props;
    const activeCard = questions.activeCard;
    const card = questions.cards[activeCard]
    const cardSubmitted = card.key in questions.submittedCards;

    return (
      <div className={cardSubmitted ? styles.hide : ''}>
        <ReactMarkdown
          source={ text }
          renderers={{ Link: props => <a href={props.href} rel="noopener noreferrer" target="_blank">{props.children}</a> }}
        />
      </div>
    );
  }
}
