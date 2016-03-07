/* eslint-disable */

import React, { PropTypes } from 'react';
import d3 from 'd3';
import topojson from 'topojson';
import ReactDom from 'react-dom';
import _ from 'lodash';
import utils from './VisUtils.js'
import colorbrewer from './libs/colorbrewer.js'

export default class GlobeComponent extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    utils.log("constructor globe", this.props)
    this.sensetivity = 0.25;
    this.svg = null;

    this.projection = d3.geo.orthographic()
      .translate([this.props.width / 2, this.props.height / 2])
      .clipAngle(90)

    this.path = d3.geo.path()
      .projection(this.projection);

    this.color = d3.scale.quantile().range(colorbrewer.Oranges[9]).domain(this.props.master.dataset.domain);

    // dunnow if this should be done here!
    this.props.vis.topojson.forEach((d) =>{
      d.properties.fillColor = this.getFillColor(d.id);
    });

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
    this.svg = d3.select(this.refs.globeSVG).call(this.zoom);
    this.svg.call(this.zoom
      .scale(this.props.vis.zoom)
      .translate(this.props.vis.translate)
      .event
    )
    .transition()
    .duration(()=>{
      const t = Math.abs(this.props.vis.translate[0]) + Math.abs(this.props.vis.translate[1]);
      const z = this.props.vis.zoom - 0.7;
      return t+z*200;
    })
    .call(this.zoom
      .scale(1)
      .translate([0,0])
      .event
    )
  }
  componentWillUnmount(){
    utils.log("UNMOUNTING")
    this.svg.remove();
  }

  getFillColor(id){
    const val = this.getValueForCountry(id);
    return val ? this.color(val) : "#EEE";
  }

  getValueForCountry(id){
    const entry = _.find(this.props.master.master, { numeric: id+""});
    let val = undefined;
    if(entry) val = _.find(this.props.master.dataset.data, { iso: entry.alpha3 });

    return val ? val.value : undefined;
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

    console.log(country, p)

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
    utils.log("render globe", this.props)

    const paths = this.props.vis.topojson.map((d, i) => <path key={i} d={this.path(d)} fill={d.properties.fillColor}></path>);

    return (
      <div>
        <svg ref='globeSVG' width={ this.props.width } height={ this.props.height }>
          <g>
            {paths}
          </g>
        </svg>
      </div>
    );
  }
}
