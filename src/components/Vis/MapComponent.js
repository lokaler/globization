/* eslint-disable */

import React, { PropTypes } from 'react';
import d3 from 'd3';
import d3_projection from './libs/d3.projection.js';
import topojson from 'topojson';
import ReactDom from 'react-dom';
import utils from './VisUtils.js'

export default class MapComponent extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    d3_projection(d3);

    utils.log("constructor map", this.props.vis)

    this.sensetivity = 0.25;
    this.geometries = this.props.master.topojson;

    this.projection = d3.geo.winkel3()
      .translate([this.props.width / 2, this.props.height / 2])

    this.path = d3.geo.path()
      .projection(this.projection);

    this.zoom = d3.behavior.zoom()
      .center([0,0])
      .on("zoom", () => {
        const e = d3.event;
        const _scale = this.props.vis.initialScale * e.scale;
        const _rotate = [(e.translate[0]/e.scale) * this.sensetivity, -(e.translate[1]/e.scale) * this.sensetivity, 0];

        // utils.log(_rotate, _scale, this.zoom.translate());

        this.projection
          .rotate(_rotate)
          .scale(_scale);

        this.forceUpdate();
      })
      .on("zoomend", () => {
        utils.log("zoomend")
        this.props.actions.changeVis({
            translate: this.zoom.translate(),
            zoom: this.zoom.scale(),
            rotate: this.projection.rotate(),
            scale: this.projection.scale(),
            animation: null
          });
      })

  }

  componentDidMount() {
    this.svg = d3.select(this.refs.mapSVG).call(this.zoom);
    this.svg.call(this.zoom
      .scale(this.props.vis.zoom)
      .translate(this.props.vis.translate)
      .event
    )
    .transition()
    .duration(()=>{
      const t = Math.abs(this.props.vis.translate[0]) + Math.abs(this.props.vis.translate[1]);
      const z = this.props.vis.zoom - 0.5;

      return t*0.75+Math.abs(Math.log(z*z))*400;
    })
    .call(this.zoom
      .scale(0.55)
      .translate([-50, -11])
      .event
    )
  }
  componentWillUnmount(){
    utils.log("UNMOUNTING")
    this.svg.remove();
  }

  zoomToCountry(name){
    if(name == "random") name = _.sample(this.props.master.master).alpha3;

    const entry = _.find(this.props.master.master, { alpha3: name});
    utils.log(name, entry);
    const country = _.find(this.props.vis.topojson, { id: entry.numeric*1 });
    if(!country){
      utils.log("country not found!");
      return;
    }

    const p = d3.geo.centroid(country);
    const scale = 2;

    p[0] = -p[0]/this.sensetivity * scale;
    p[1] = p[1]/this.sensetivity * scale;

    utils.log(country, p)

    this.svg
      //.call(this.zoom.scale(this.props.vis.zoom).translate(this.props.vis.translate))
      .transition()
      .duration(1000)
      .call(this.zoom.scale(scale).translate(p).event);
  }

  shouldComponentUpdate(nextProps) {
    utils.log("shouldComponentUpdate", nextProps.vis.animation ? "no": "yes");

    const d = nextProps.vis.animation;
    if(d){
      this[d.action](d.payload);
      return false;
    } else {
      return true;
    }
  }


  render() {
    utils.log("render map")

    const paths = this.geometries.map((d, i) => <path key={i} d={this.path(d)} fill={d.properties.fillColor}></path>);

    return (
      <div>
        <svg ref='mapSVG' width={ this.props.width } height={ this.props.height }>
          <g>
            {paths}
          </g>
        </svg>
      </div>
    );
  }
}
