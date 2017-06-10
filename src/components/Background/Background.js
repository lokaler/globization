import React from 'react';
import PropTypes from 'prop-types';
import Vis from '../Vis/VisWrapper';
import style from './Background.css';

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

    if(showVis) {
      return <Vis { ...this.props } />;
    }

    // Prototype for Background

    return (
      <div className={style.container}>
        <img src={background.source} alt="background"/>
      </div>
    );
  }
}
