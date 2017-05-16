/* eslint-disable */

import React, { PropTypes } from 'react';
import d3 from 'd3';
import d3_projection from './libs/d3.projection.js';
import ReactDom from 'react-dom';
import utils from './VisUtils.js'
import styles from './globe.scss';
// import cssModules from 'react-css-modules';
import classnames from 'classnames';
import Dataset from 'logic/Dataset.js'
import { defer } from 'lodash';
import { topofeatures } from 'data/map/index';

// @cssModules(styles)

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

    const dataset = this.props.questions.dataset;

    this.sensetivity = 0.25;
    this.svg = null;
    this.activeGeometry = null;
    this.graticule = d3.geo.graticule()();

    this.dataset = new Dataset(dataset.data);

    this.projection = d3.geo.winkel3()
      .translate([this.props.width / 2, this.props.height / 2])
      .precision(0)

    this.path = d3.geo.path()
       .projection({
         stream: s => this.simplify.stream(this.projection.stream(this.clip.stream(s)))
       })
       // .projection(this.projection);

    this.clip = d3.geo.clipExtent()
      .extent([[0, 0], [this.props.width, this.props.height]]);

    window.area = 1;

    this.simplify = d3.geo.transform({
      point: function(x, y, z) {
        if (z >= window.area) this.stream.point(x, y);
      }
    });

    this.reset = {
      scale: 0.55,
      translate: [-50, -11]
    }

    // dunnow if this should be done here!
    this.geometries = topofeatures;
    this.geometries.forEach((d) =>{
      d.properties.fillColor = this.getFillColor(d.properties.iso);
    });

    this.zoom = d3.behavior.zoom()
      .center([0,0])
      .scaleExtent([0.5,5])
      .size([this.props.width,this.props.height])
      .on("zoom", () => {
        const e = d3.event;
        const mobileScale = this.props.app.mobile ? 0.7 : 1;
        const _scale = this.props.vis.initialScale * mobileScale * e.scale;
        const _rotate = [
          (e.translate[0]/e.scale) * this.sensetivity,
          -(e.translate[1]/e.scale) * this.sensetivity,
          0
        ];

        this.projection
          .rotate(_rotate)
          .scale(_scale);

        window.area = 1 / this.zoom.scale() /  this.zoom.scale();
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
    const dataset = this.props.questions.dataset;
    const translate = dataset.scale==1 ? this.reset.translate : dataset.translate.map(d=>d*this.reset.scale);
    const scale = this.reset.scale * dataset.scale;

    if(this.props.vis.active){
      this.activeGeometry = _.find(topofeatures, (d)=> d.properties.iso === this.props.vis.active);
    }

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

  zoomToCountry(name){

    const country = _.find(this.geometries, (d)=> d.properties.iso === name);
    if(!country){ utils.log("country not found!"); return; }

    const value = this.dataset.getValueForCountry(name);
    const unit = this.props.questions.dataset.unit;
    const c = this.path.centroid(country);

    // console.log("zoomToCountry", name);

    defer(()=>{
      this.props.actions.changeVis({
        tooltip: {
          active: true,
          iso: name,
          value,
          unit,
          x: c[0],
          y: c[1]
        }
      });
    });
  }


  getFillColor(iso){
      const val = this.dataset.getValueForCountry(iso);
      return val ? this.props.color(val) : "#EEE";
    }


  componentWillReceiveProps(nextProps) {
    //utils.log("shouldComponentUpdate", nextProps.vis.animation ? "no": "yes");

    // if(nextProps.vis.animation){
    //   this[nextProps.vis.animation.action](nextProps.vis.animation.payload);
    // }

    if(nextProps.vis.active != this.props.vis.active) {
      this.activeGeometry = _.find(topofeatures, (d)=> d.properties.iso === nextProps.vis.active);
      // console.log("activeGeometry",this.activeGeometry)
      if(nextProps.vis.active){
        this.zoomToCountry(nextProps.vis.active);
      }
    }

    if(nextProps.questions.dataset != this.props.questions.dataset) {
      const dataset = nextProps.questions.dataset;
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
    const unit = this.props.questions.dataset.unit;

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

    // console.time("project");
    this.geometries
      .forEach(d=> d.path=this.path(d))

    const paths = this.geometries
      .filter(d=>d.path)
      .map((d, i) => {
        return (
          <path
            key={ i }
            d={d.path}
            fill={d.properties.fillColor}
            onMouseLeave={this.onMouseLeave.bind(this,d)}
            onMouseEnter={this.onMouseEnter.bind(this,d)}
          />
        )
      });
    // console.timeEnd("project");

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
