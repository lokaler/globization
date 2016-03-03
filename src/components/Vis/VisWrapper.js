/* eslint-disable */

import React, { PropTypes } from 'react';
import GlobeComponent from './GlobeComponent';
import VisUtils from './VisUtils';

export default class Globe extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired
  };

  componentDidMount() {
    console.log(VisUtils.calculateBlsa());
    //this.props.actions.updatePos([52, 23]);
  }

  changeTypeGlobe(type) {
    console.log(type)
    //this.props.actions.changeType(type);
  }

  render() {

    let Globe = <GlobeComponent {...this.props}/>;

    if(this.props.vis.type === 'globe'){
      Globe = <GlobeComponent {...this.props}/>;
    }

    return (
      <div>
        { Globe }
        <div>
          <button onClick={ this.changeTypeGlobe }>Globus</button>
          <button onClick={ this.changeTypeGlobe }>Karte</button>
          <button onClick={ this.changeTypeGlobe }>Diagramm</button>
        </div>
      </div>
    );
  }
}
