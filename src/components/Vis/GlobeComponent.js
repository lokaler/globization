/* eslint-disable */

import React, { PropTypes } from 'react';
import d3 from 'd3';
import _ from 'lodash';
import utils from './VisUtils.js'
import Dataset from '../../logic/Dataset.js'
import cssModules from 'react-css-modules';
import styles from './globe.scss';
import classnames from 'classnames';

@cssModules(styles)

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

    const dataset = this.props.master.dataset;

    this.sensetivity = 0.25;
    this.svg = null;
    this.activeGeometry = null;
    this.graticule = d3.geo.graticule()();

    this.dataset = new Dataset(dataset.data);

    this.projection = d3.geo.orthographic()
      .translate([this.props.width / 2, this.props.height / 2])
      .clipAngle(90)

    this.path = d3.geo.path()
      .projection(this.projection);


    // dunnow if this should be done here!
    this.geometries = this.props.master.topojson;
    this.geometries.forEach((d) =>{
      d.properties.fillColor = this.getFillColor(d.properties.iso);
    });

    this.zoom = d3.behavior.zoom()
      .center([0,0])
      .scaleExtent([1,5])
      .size([this.props.width,this.props.height])
      .on("zoom", () => {
        const e = d3.event;
        const _scale = this.props.vis.initialScale * e.scale;
        const _rotate = [
          (e.translate[0]/e.scale) * this.sensetivity,
          -(e.translate[1]/e.scale) * this.sensetivity,
          0
        ];

        this.projection
          .rotate(_rotate)
          .scale(_scale);

        //utils.log("zoom",this.zoom.translate(), this.zoom.scale());

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

  resetGlobe(){
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

  componentDidMount() {
    utils.log("componentDidMount", this.props)

    this.svg = d3.select(this.refs.globeSVG).call(this.zoom);
    this.resetGlobe();

  }

  componentWillUnmount(){
    utils.log("UNMOUNTING")
    this.svg.remove();
  }

  getFillColor(iso){
    const val = this.dataset.getValueForCountry(iso);
    return val ? this.props.color(val) : "#EEE";
  }



  zoomToCountry(name){

    const country = _.find(this.geometries, (d)=> d.properties.iso === name);
    if(!country){ utils.log("country not found!"); return; }

    const p = d3.geo.centroid(country);
    const scale = 2;

    p[0] = -p[0]/this.sensetivity * scale;
    p[1] = p[1]/this.sensetivity * scale;

    this.svg
      .transition()
      .duration(1000)
      .call(this.zoom.scale(scale).translate(p).event);
  }


  componentWillReceiveProps(nextProps) {
    // utils.log("shouldComponentUpdate", nextProps, this.props);
    let update = false;

    if(nextProps.vis.animation) {
      this[nextProps.vis.animation.action](nextProps.vis.animation.payload);
      update = false;
    }

    if(nextProps.vis.active != this.props.vis.active) {
      this.activeGeometry = _.find(nextProps.master.topojson, (d)=> d.properties.iso === nextProps.vis.active);
      update = true;
    }

    if(nextProps.master.dataset != this.props.master.dataset) {
      const dataset = nextProps.master.dataset;

      this.dataset.setData(dataset.data);

      utils.log(this.props.color.domain())
      this.svg
      .transition()
      .duration(1000)
      .call(this.zoom
        .scale(dataset.scale)
        .translate(dataset.translate)
        .event
      )
      .tween("colors", ()=>{
        this.geometries.forEach((d) =>{
          const a = d.properties.fillColor;
          const b = this.getFillColor(d.properties.iso);
          d.interpolate = d3.interpolateRgb(a, b);
        });
        return (t) => {
          this.geometries.forEach((d,i) =>{
            d.properties.fillColor = d.interpolate(t);
          })
        };
      });

      update = false;
    }

    // utils.log("shouldComponentUpdate", update ? "yes": "no");
    return update;
  }

  getActiveClass(name){
    return classnames(this.props.vis.active === name ? "active" : "");
  }

  onMouseEnter(d){
    const c = this.path.centroid(d);
    const value = this.dataset.getValueForCountry(d.properties.iso);
    const unit = this.props.master.dataset.unit;

    this.props.actions.changeVis({
      tooltip: {
        active: true,
        iso: d.properties.iso,
        value,
        unit,
        x: c[0],
        y: c[1]
      }
    });

  }

  onMouseLeave(d){
    this.props.actions.changeVis({
      tooltip: {
        active: false
      }
    });
  }


  render() {
    utils.log("render globe")

    const paths = this.geometries.map((d, i) => {
      return (
        <path
          key={ i }
          d={this.path(d)}
          fill={d.properties.fillColor}
          onMouseLeave={this.onMouseLeave.bind(this,d)}
          onMouseEnter={this.onMouseEnter.bind(this,d)}
        />
      )
    });

    const activeGeometry = <path className="activeGeometry" d={this.path(this.activeGeometry)}/>;
    const graticule = <path className="graticule" key="graticule" d={ this.path(this.graticule) } />;


    return (
      <div>
        <svg className='globe' ref='globeSVG' width={ this.props.width } height={ this.props.height }>
          <defs>
            { utils.svgStripePattern }
          </defs>
          <g>
            { graticule }
            { paths }
            { activeGeometry }
          </g>
        </svg>
      </div>
    );
  }
}
