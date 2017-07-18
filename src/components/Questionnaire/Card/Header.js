import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.PureComponent {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
  }

  render() {
    const { cards, activeCard } = this.props.questions;
    const { title } = cards[activeCard];
    const totalCards = cards.length-1;

    if(activeCard === 0){
      return null;
    }

    return (
      <div className="header">
        <div className="title">{ title }</div>
        <div className="numbers">({ activeCard }/{ totalCards })</div>
      </div>
    );
  }
}
