/* eslint-disable */

import React, { PropTypes } from 'react';
import GlobeComponent from './GlobeComponent';
import MapComponent from './MapComponent';
import VisUtils from './VisUtils';

export default class Globe extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    //this.props.actions.updatePos([52, 23]);
  }

  changeType(type, evt) {
    this.props.actions.changeType(type);
  }

  random(){
    this.props.actions.changeVis({
      animation: {
        action: "zoomToCountry",
        payload: "random"
      }
    });
  }

  render() {

    let Globe = <div></div>;

    if(this.props.vis.type === 'globe'){
      Globe = <GlobeComponent {...this.props} width={700} height={500} />
    }
    if(this.props.vis.type === 'map'){
      Globe = <MapComponent {...this.props} width={700} height={500} />
    }

    const changeGlobe = this.changeType.bind(this, 'globe');
    const changeMap = this.changeType.bind(this, 'map');
    const changePlot = this.changeType.bind(this, 'plot');
    const random = this.random.bind(this);

    return (
      <div>
        { Globe }
        <div>
          <button onClick={ changeGlobe }>Globus</button>
          <button onClick={ changeMap }>Karte</button>
          <button onClick={ changePlot }>Diagramm</button>
          <button onClick={ random }>Random</button>
        </div>
      </div>
    );
  }
}
