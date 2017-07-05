/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import GlobeComponent from './GlobeComponent';
import MapComponent from './MapComponent';
import ScatterComponent from './ScatterComponent';
import TooltipComponent from './TooltipComponent';
import utils from './VisUtils';
import styles from './vis.css';
import classnames from 'classnames';
import colorbrewer from 'colorbrewer'
import MapLegendComponent from './MapLegendComponent.js';
import ScatterLegendComponent from './ScatterLegendComponent.js';
import LinkedDatasetMenu from './LinkedDatasetMenu/LinkedDatasetMenu';
import { sponLogger } from 'logic/logging';

export default class Globe extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.color = d3.scale.quantile()
      .range(colorbrewer['Oranges'][9])
      .domain([0,10])
  }

  componentWillReceiveProps(nextProps){
    utils.log("componentWillUpdate", nextProps)
    const dataset = nextProps.questions.dataset;

    if(dataset && dataset.key !== 'none'){
      const colors = colorbrewer[dataset.colorSet][dataset.colorNum].filter((d,i) => i!==0);
      this.color
        .range(colors)
        .domain(dataset.domain);

    } else {
      this.color
        .range(['#FFF', '#FFF'])
        .domain([0,0]);
    }

  }

  changeType(type) {
    this.props.actions.changeVis({
      type,
      tooltip: { active: false }
    });
    sponLogger();
  }

  getActiveClass(name){
    return classnames([ name, this.props.vis.type === name ? "active" : ""]);
  }

  render() {
    utils.log("render vis");

    const dataset = this.props.questions.dataset;

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
    const { width, height, mobile } = this.props.app;
    const { hideCard } = this.props.questions;
    const disableEvents = !hideCard ? { pointerEvents: 'none' } : { };

    return (
      <div className="vis" style={ disableEvents }>
        <div>
          { dataset &&
            <Component color={this.color} {...this.props} width={width} height={height} />
          }
          <div className="menu">
            <div className={ this.getActiveClass('globe') } onClick={ changeGlobe }></div>
            <div className={ this.getActiveClass('map') } onClick={ changeMap }></div>
            <div className={ this.getActiveClass('scatter') } onClick={ changeScatter }></div>
          </div>
          { dataset && dataset.linkedSet && false &&
            <LinkedDatasetMenu {...this.props} />
          }
          { hideCard && 
            <TooltipComponent tooltip={this.props.vis.tooltip} />
          }
          { dataset && dataset.key != "none" && hideCard &&
            <Legend color={this.color} {...this.props} />
          }
        </div>
      </div>
    );
  }
}
