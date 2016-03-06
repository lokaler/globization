/* eslint-disable */

import React, { PropTypes } from 'react';
import d3 from 'd3';
import d3_projection from './libs/d3.projection.js';
import topojson from 'topojson';
import ReactDom from 'react-dom';

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

    console.log("constructor map", this.props.vis)

    this.sensetivity = 0.25;

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

        this.projection
          .rotate(_rotate)
          .scale(_scale);

        this.forceUpdate();
      })
      .on("zoomend", () => {
        console.log("zoomend")
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
      .scale(1)
      .translate(this.props.vis.translate)
      .event
    );
  }
  componentWillUnmount(){
    console.log("UNMOUNTING")
    this.svg.remove();
  }

  zoomToCountry(name){
    if(name == "random") name = _.sample(this.props.master.master).alpha3;

    const entry = _.find(this.props.master.master, { alpha3: name});
    console.log(name, entry);
    const country = _.find(this.props.vis.topojson, { id: entry.numeric*1 });
    if(!country){
      console.log("country not found!");
      return;
    }

    const p = d3.geo.centroid(country);
    const scale = 2;

    p[0] = -p[0]/this.sensetivity * scale;
    p[1] = p[1]/this.sensetivity * scale;

    console.log(country, p)

    this.svg
      //.call(this.zoom.scale(this.props.vis.zoom).translate(this.props.vis.translate))
      .transition()
      .duration(1000)
      .call(this.zoom.scale(scale).translate(p).event);
  }

  shouldComponentUpdate(nextProps) {
    console.log("shouldComponentUpdate", nextProps.vis.animation ? "no": "yes");

    const d = nextProps.vis.animation;
    if(d){
      this[d.action](d.payload);
      return false;
    } else {
      return true;
    }
  }


  render() {
    console.log("render map", this.props.vis)

    const paths = this.props.vis.topojson.map((d, i) => <path key={i} d={this.path(d)}></path>);

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
