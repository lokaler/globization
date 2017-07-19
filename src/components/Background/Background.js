import React from 'react';
import PropTypes from 'prop-types';
import Vis from '../Vis/VisWrapper';
import style from './Background.css';
import NextButton from './NextButton';

export default class Background extends React.PureComponent {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
  };

  onImageClick = () => {
    const { actions, questions } = this.props;
    let cardIndex = questions.activeCard + 1;
    if(cardIndex >= questions.cards.length) cardIndex = 0
    actions.setCard(cardIndex);
  }

  render() {
    const { hideCard, background, activeCard } = this.props.questions;
    const showVis = (['globe', 'map', 'scatterplot'].indexOf(background.type) >= 0);
    const active = activeCard === 0 || hideCard;

    return (
      <div className={[style.container, active ? 'active' : 'inactive'].join(' ')}>
        { showVis &&
          <Vis { ...this.props } />
        }
        { background.type === 'image' &&
          <img
            onClick={this.onImageClick}
            src={background.source}
            alt="background"/>
        }
        { background.type === 'iframe' &&
          <iframe 
            name="backgroundIframe"
            id="backgroundIframe"
            src={background.source}
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            width="100%"
            height="100%">
          </iframe>
        }
        {
          activeCard !== 0 && <NextButton { ...this.props }/>
        }
      </div>
    );
  }
}
