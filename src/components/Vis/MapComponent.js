/* eslint-disable */

import React, { PropTypes } from 'react';
import d3 from 'd3';
import d3_projection from './libs/d3.projection.js';
import topojson from 'topojson';
import ReactDom from 'react-dom';
import utils from './VisUtils.js'
import styles from './globe.scss';
import cssModules from 'react-css-modules';
import classnames from 'classnames';
import Dataset from '../../logic/Dataset.js'


@cssModules(styles)

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

    const dataset = this.props.master.dataset;

    this.sensetivity = 0.25;
    this.svg = null;
    this.activeGeometry = null;
    this.graticule = d3.geo.graticule()();

    this.dataset = new Dataset(dataset.data);

    this.projection = d3.geo.winkel3()
      .translate([this.props.width / 2, this.props.height / 2])

    this.path = d3.geo.path()
      .projection(this.projection);

    this.reset = {
      scale: 0.55,
      translate: [-50, -11]
    }

    // dunnow if this should be done here!
    this.geometries = this.props.master.topojson;
    this.geometries.forEach((d) =>{
      d.properties.fillColor = this.getFillColor(d.properties.iso);
    });

    this.zoom = d3.behavior.zoom()
      .center([0,0])
      .scaleExtent([0.5,5])
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


  componentDidMount() {
    this.svg = d3.select(this.refs.mapSVG).call(this.zoom);
    this.resetGlobe();
  }

  resetGlobe(){
    const dataset = this.props.master.dataset;
    const translate = dataset.scale==1 ? this.reset.translate : dataset.translate.map(d=>d*this.reset.scale);
    const scale = this.reset.scale * dataset.scale;

    this.svg.call(this.zoom
      .scale(this.props.vis.zoom)
      .translate(this.props.vis.translate)
      .event
    )
    .transition()
    .duration(()=>{
      const t = Math.abs(this.props.vis.translate[0]) + Math.abs(this.props.vis.translate[1]);
      const z = this.props.vis.zoom - 0.5;

      // return t*0.75+Math.abs(Math.log(z*z))*400;
      return 1000;
    })
    .call(this.zoom
      .scale(scale)
      .translate(translate)
      .event
    )
  }


  getFillColor(iso){
      const val = this.dataset.getValueForCountry(iso);
      return val ? this.props.color(val) : "#EEE";
    }

  zoomToCountry(name){

    const country = _.find(this.geometries, (d)=> d.properties.iso === name);
    if(!country){ utils.log("country not found!"); return; }

  }

  componentWillReceiveProps(nextProps) {
    //utils.log("shouldComponentUpdate", nextProps.vis.animation ? "no": "yes");

    if(nextProps.vis.animation){
      this[nextProps.vis.animation.action](nextProps.vis.animation.payload);
    }

    if(nextProps.vis.active != this.props.vis.active) {
      this.activeGeometry = _.find(nextProps.master.topojson, (d)=> d.properties.iso === nextProps.vis.active);
      utils.log("activeGeometry",this.activeGeometry)
    }

    if(nextProps.master.dataset != this.props.master.dataset) {
      const dataset = nextProps.master.dataset;
      const translate = dataset.scale==1 ? this.reset.translate : dataset.translate.map(d=>d*this.reset.scale);
      const scale = this.reset.scale * dataset.scale;

      this.dataset.setData(dataset.data);
      this.svg
      .transition()
      .duration(1000)
      .call(this.zoom
        .scale(scale)
        .translate(translate)
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
    }
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
    utils.log("render map")

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


    return (
      <div>
        <svg className='map' ref='mapSVG' width={ this.props.width } height={ this.props.height }>
          <g>
            { paths }
            { activeGeometry }
          </g>
        </svg>
      </div>
    );
  }
}
