/* eslint-disable */

import React, { PropTypes } from 'react';
import GlobeComponent from './GlobeComponent';
import MapComponent from './MapComponent';
import ScatterComponent from './ScatterComponent';
import TooltipComponent from './TooltipComponent';
import utils from './VisUtils';
import cssModules from 'react-css-modules';
import styles from './vis.scss';
import classnames from 'classnames';

@cssModules(styles)

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

  changeType(type) {
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

  getActiveClass(name){
    return classnames([ name, this.props.vis.type === name ? "active" : ""]);
  }

  render() {

    let visComponent = <div></div>;

    if(this.props.vis.type === 'globe'){
      visComponent = <GlobeComponent {...this.props} width={550} height={500} />
    }
    if(this.props.vis.type === 'map'){
      visComponent = <MapComponent {...this.props} width={550} height={500} />
    }
    if(this.props.vis.type === 'scatter'){
      visComponent = <ScatterComponent {...this.props} width={550} height={500} />
    }

    const changeGlobe = this.changeType.bind(this, 'globe');
    const changeMap = this.changeType.bind(this, 'map');
    const changeScatter = this.changeType.bind(this, 'scatter');
    const random = this.random.bind(this);

    return (
      <div className="vis">
        { visComponent }
        <div className="menu">
          <div className={ this.getActiveClass('globe') } onClick={ changeGlobe }></div>
          <div className={ this.getActiveClass('map') } onClick={ changeMap }></div>
          <div className={ this.getActiveClass('scatter') } onClick={ changeScatter }></div>
        </div>
        <TooltipComponent {...this.props} />
      </div>
    );
  }
}
