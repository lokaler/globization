import React from 'react';
import PropTypes from 'prop-types';
import Vis from '../Vis/VisWrapper';
import './Background.css';

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
    console.log(background)

    if(showVis) {
      return <Vis { ...this.props } />;
    }

    return (
      <div>
        <img src={background.source} />
      </div>
    );
  }
}
