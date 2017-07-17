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

  render() {
    const { hideCard, background } = this.props.questions;
    const showVis = (['globe', 'map', 'scatterplot'].indexOf(background.type) >= 0)
    // console.log(this.props, showVis, background)

    return (
      <div className={[style.container, hideCard ? 'active' : 'inactive'].join(' ')}>
        { showVis &&
          <Vis { ...this.props } />
        }
        { background.type === 'image' &&
          <img
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
        <NextButton { ...this.props }/>
      </div>
    );
  }
}
