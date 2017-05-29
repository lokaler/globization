import React, { PropTypes } from 'react';

export default class Header extends React.PureComponent {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
  }

  render() {
    const { cards, activeCard } = this.props.questions;
    const totalCards = cards.length-1;

    if(activeCard === 0){
      return null;
    }

    return (
      <div className="header">
        ({ activeCard }/{ totalCards })
      </div>
    );
  }
}
