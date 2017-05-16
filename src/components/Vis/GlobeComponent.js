/* eslint-disable */

import React, { PropTypes } from 'react';
import d3 from 'd3';
import _ from 'lodash';
import utils from './VisUtils.js'
import Dataset from '../../logic/Dataset.js'
// import cssModules from 'react-css-modules';
import styles from './globe.css';
import { topofeatures } from 'data/map/index';
import classnames from 'classnames';


// @cssModules(styles)

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

    const dataset = this.props.questions.dataset;

    this.sensetivity = 0.25;
    this.svg = null;
    this.activeGeometry = null;

    this.dataset = new Dataset(dataset.data);

    this.projection = d3.geo.orthographic()
      .translate([this.props.width / 2, this.props.height / 2])
      .clipAngle(90)
      .precision(0.1)


    this.graticule = d3.geo.graticule()
      .precision(10)
      // .extent(this.projection.clipExtent());
    this.graticulePath = d3.geo.path().projection(this.projection);

    this.path = d3.geo.path()
      .projection({
        stream: s => this.simplify.stream(this.projection.stream(this.clip.stream(s)))
      })
      // .projection(this.projection);

    this.clip = d3.geo.clipExtent()
      .extent([[0, 0], [this.props.width, this.props.height]]);

    this.scale = this.props.vis.zoom;
    let area = 1 / this.scale / this.scale;

    this.simplify = d3.geo.transform({
      point: function(x, y, z) {
        if (z >= area) this.stream.point(x, y);
      }
    });

    this.dragging = false;

    // dunnow if this should be done here!
    this.geometries = topofeatures;
    this.geometries.forEach((d) =>{
      d.properties.fillColor = this.getFillColor(d.properties.iso);
    });

    this.zoom = d3.behavior.zoom()
      .center([0,0])
      .scaleExtent([1,9])
      .size([this.props.width,this.props.height])
      .on("zoom", () => {
        const e = d3.event;
        const mobileScale = this.props.app.mobile ? 0.5 : 1;
        const _scale = this.props.vis.initialScale * mobileScale * e.scale;
        const _rotate = [
          (e.translate[0]/e.scale) * this.sensetivity,
          -(e.translate[1]/e.scale) * this.sensetivity,
          0
        ];

        this.projection
          .rotate(_rotate)
          .scale(_scale);

        area = 1 / this.zoom.scale() /  this.zoom.scale();

        //utils.log("zoom",this.zoom.translate(), this.zoom.scale());

        this.forceUpdate();
      })
      .on("zoomstart", () => {
        this.dragging = true;
        this.props.actions.changeVis({
          tooltip: {
            active: false
          }
        });
      })
      .on("zoomend", () => {
        utils.log("zoomend")
        this.dragging = false;
        this.props.actions.changeVis({
            translate: this.zoom.translate(),
            zoom: this.zoom.scale(),
            rotate: this.projection.rotate(),
            scale: this.projection.scale()
          });
      })


  }

  resetGlobe(){
    const dataset = this.props.questions.dataset;

    this.svg.call(this.zoom
      .scale(this.props.vis.zoom)
      .translate(this.props.vis.translate)
      .event
    )
    .transition()
    .duration(()=>{
      const t = Math.abs(dataset.translate[0]) + Math.abs(dataset.translate[1]);
      const z = this.props.vis.zoom - 0.7;
      return t+z*200;
      // return 1000;
    })
    .call(this.zoom
      .scale(dataset.scale)
      .translate(dataset.translate)
      .event
    )
  }

  componentDidMount() {
    utils.log("componentDidMount", this.props)

    this.svg = d3.select(this.refs.globeSVG).call(this.zoom);

    if(this.props.vis.active){
      this.zoomToCountry(this.props.vis.active);
    } else {
      this.resetGlobe();
    }

  }

  componentWillUnmount(){
    utils.log("UNMOUNTING")
    this.svg.remove();
  }

  getFillColor(iso){
    const val = this.dataset.getValueForCountry(iso);
    return val ? this.props.color(val) : "#EEE";
  }


  // shouldComponentUpdate(nextProps) {
  //   const p = this.props;
  //   const n = nextProps;
  //   return (
  //     (p.app !== n.app)
  //     || (p.questions !== n.questions)
  //     || (p.master !== n.master)
  //   );
  // }



  zoomToCountry(name){
    // console.log("zoomToCountry");

    this.activeGeometry = _.find(this.geometries, (d)=> d.properties.iso === name);
    // const country = _.find(this.geometries, (d)=> d.properties.iso === name);
    // if(!country){ utils.log("country not found!", name); return; }

    const p = d3.geo.centroid(this.activeGeometry);
    const area = d3.geo.area(this.activeGeometry);
    // console.log(area);
    const scale = -Math.log(area)*0.7;
    // console.log(scale)
    const value = this.dataset.getValueForCountry(name);
    const unit = this.props.questions.dataset.unit;

    p[0] = -p[0]/this.sensetivity * scale,
    p[1] = p[1]/this.sensetivity * scale

    this.svg
      .transition()
      .duration(1000)
      .call(this.zoom.scale(scale).translate(p).event)
      .each("end", ()=>{
        const c = this.path.centroid(this.activeGeometry);
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
      })
  }


  shouldComponentUpdate(nextProps) {
    utils.log("shouldComponentUpdate", nextProps, this.props);
    let update = false;

    if(nextProps.height != this.props.height || nextProps.width != this.props.width){
      this.projection.translate([nextProps.width / 2, nextProps.height / 2]);
      this.clip.extent([[0, 0], [nextProps.width, nextProps.height]]);
      this.zoom.size([nextProps.width,nextProps.height]);
      update = false;
    }

    if(nextProps.questions.hideCard && nextProps.vis.animation) {
      console.log("do animation", nextProps.vis.animation, this.props.vis.animation)
      this[nextProps.vis.animation.action](nextProps.vis.animation.payload);
      this.props.actions.changeVis({ animation: null });
      update = false;
    }

    if(nextProps.vis.active != this.props.vis.active) {
      this.activeGeometry = _.find(topofeatures, (d)=> d.properties.iso === nextProps.vis.active);
      update = false;
    }

    // if(nextProps.vis.translate != this.props.vis.translate
    //   || nextProps.vis.zoom != this.props.vis.zoom
    //   || nextProps.vis.scale != this.props.vis.scale
    //   || nextProps.vis.rotate != this.props.vis.rotate
    // ){
    //   update = true;
    // }

    if(nextProps.questions.dataset != this.props.questions.dataset) {
      // console.log("new Dataset!", nextProps.color.domain());
      const dataset = nextProps.questions.dataset;

      this.dataset.setData(dataset.data);

      utils.log(nextProps.color.domain())
      this.svg
      .transition()
      .duration(1000)
      .call(this.zoom
        .scale(dataset.scale)
        .translate(dataset.translate)
        .event
      )

      this.geometries.forEach((d) =>{
        d.properties.fillColor = this.getFillColor(d.properties.iso);
      });

      // tweening is not working for now

      // .tween("colors", ()=>{
      //   this.geometries.forEach((d) =>{
      //     const a = d.properties.fillColor;
      //     const b = this.getFillColor(d.properties.iso);
      //     d.interpolate = d3.interpolateRgb(a, b);
      //   });
      //   return (t) => {
      //     this.geometries.forEach((d,i) =>{
      //       d.properties.fillColor = d.interpolate(t);
      //     })
      //   };
      // });

      update = false;
    }

    utils.log("shouldComponentUpdate", update ? "yes": "no");
    return update;
  }

  getActiveClass(name){
    return classnames(this.props.vis.active === name ? "active" : "");
  }

  onMouseClick(d){
    this.onMouseEnter(d);
  }

  onMouseEnter(d){
    if(this.dragging) return;

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
    if(this.dragging) return;

    this.props.actions.changeVis({
      tooltip: {
        active: false
      }
    });
  }


  render() {
    utils.log("render globe")

    this.geometries
      .forEach(d=> d.path=this.path(d))

    const paths = this.geometries.filter(d=>d.path).map((d, i) => {
      return (
        <path
          key={ i }
          d={d.path}
          fill={d.properties.fillColor}
          onMouseLeave={this.onMouseLeave.bind(this,d)}
          onMouseEnter={this.onMouseEnter.bind(this,d)}
          onClick={this.onMouseClick.bind(this,d)}
        />
      )
    });

    const activeGeometry = <path className="activeGeometry" d={this.path(this.activeGeometry)}/>;
    const graticule = <path className="graticule" key="graticule" d={ this.graticulePath(this.graticule()) } />;


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
