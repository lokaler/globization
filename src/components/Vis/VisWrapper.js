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
import colorbrewer from 'colorbrewer'
import MapLegendComponent from './MapLegendComponent.js';
import ScatterLegendComponent from './ScatterLegendComponent.js';


@cssModules(styles)

export default class Globe extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.color = d3.scale.quantile();
  }

  componentDidMount() {
    //this.props.actions.updatePos([52, 23]);
  }

  componentWillReceiveProps(nextProps){
    utils.log("componentWillUpdate", nextProps)
    const dataset = nextProps.master.dataset;

    if(dataset){
      this.color
        .range(colorbrewer[dataset.colorSet][dataset.colorNum])
        .domain(dataset.domain);
    }

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
    const dataset = this.props.master.dataset;
    const type = this.props.master.dataset;

    const Component = {
      globe: GlobeComponent,
      map: MapComponent,
      scatter: ScatterComponent,
    }[this.props.vis.type];

    const Legend = {
      globe: MapLegendComponent,
      map: MapLegendComponent,
      scatter: ScatterLegendComponent
    }[this.props.vis.type];

    const changeGlobe = this.changeType.bind(this, 'globe');
    const changeMap = this.changeType.bind(this, 'map');
    const changeScatter = this.changeType.bind(this, 'scatter');
    const random = this.random.bind(this);

    return (
      <div className="vis">
        { dataset &&
          <Component color={this.color} {...this.props} width={540} height={500} />
        }
        <div className="menu">
          <div className={ this.getActiveClass('globe') } onClick={ changeGlobe }></div>
          <div className={ this.getActiveClass('map') } onClick={ changeMap }></div>
          <div className={ this.getActiveClass('scatter') } onClick={ changeScatter }></div>
        </div>
        <TooltipComponent {...this.props} />
        { dataset &&
          <Legend color={this.color} {...this.props} />
        }

      </div>
    );
  }
}
