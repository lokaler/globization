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
    console.log(VisUtils.calculateBla());
    //this.props.actions.updatePos([52, 23]);
  }

  changeType(type, evt) {
    console.log(type, evt)
    //this.props.actions.changeType(type);
  }

  render() {

    let Globe = <GlobeComponent {...this.props}/>;

    if(this.props.vis.type === 'globe'){
      Globe = <GlobeComponent {...this.props}/>;
    }

    const changeGlobe = this.changeType.bind(this, 'globe');
    const changeMap = this.changeType.bind(this, 'map');
    const changePlot = this.changeType.bind(this, 'plot');

    return (
      <div>
        { Globe }
        <div>
          <button onClick={ changeGlobe }>Globus</button>
          <button onClick={ changeMap }>Karte</button>
          <button onClick={ changePlot }>Diagramm</button>
        </div>
      </div>
    );
  }
}
