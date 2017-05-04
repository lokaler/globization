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
import LinkedDatasetMenu from './LinkedDatasetMenu/LinkedDatasetMenu';
import { sponLogger } from 'logic/logging';


@cssModules(styles)

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
    utils.log("render vis");

    const dataset = this.props.questions.dataset;
    const type = this.props.questions.dataset;

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
    const { app } = this.props;

    const height = app.height;
    const width = app.width;
    const mobile = app.mobile;

    return (
      <div className="vis">

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
          <TooltipComponent {...this.props} />
          { dataset && dataset.key != "none" && false &&
            <Legend color={this.color} {...this.props} />
          }
        </div>

      </div>
    );
  }
}
