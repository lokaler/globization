/* eslint-disable */

import React, { PropTypes } from 'react';
import d3 from 'd3';
import _ from 'lodash';
import utils from './VisUtils.js'
import colorbrewer from 'colorbrewer'
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
    this.sensetivity = 0.25;
    this.svg = null;
    this.activeGeometry = null;
    this.graticule = d3.geo.graticule()();

    this.dataset = new Dataset();

    this.projection = d3.geo.orthographic()
      .translate([this.props.width / 2, this.props.height / 2])
      .clipAngle(90)

    this.path = d3.geo.path()
      .projection(this.projection);

    this.color = d3.scale.quantile()
      // .range(colorbrewer[this.props.master.dataset.colorSet][this.props.master.dataset.colorNum])
      // .domain(this.props.master.dataset.domain);

    // dunnow if this should be done here!
    this.geometries = this.props.master.topojson;


    this.zoom = d3.behavior.zoom()
      .center([0,0])
      .scaleExtent([1,5])
      .size([this.props.width,this.props.height])
      .on("zoom", () => {
        const e = d3.event;
        const _scale = this.props.vis.initialScale * e.scale;
        const _rotate = [(e.translate[0]/e.scale) * this.sensetivity, -(e.translate[1]/e.scale) * this.sensetivity, 0];

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
    utils.log("componentDidMount", this.props)

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

  getFillColor(iso,data){
    const val = this.getValueForCountry(iso,data);
    // return val ? this.color(val) : "url(#pattern-stripe)";
    return val ? this.color(val) : "#EEE";
  }

  getValueForCountry(iso,data){
    const val = _.find(data, { iso });
    return val ? val.value : undefined;
  }

  zoomToCountry(name){
    // todo: wrap this in the dataset class
    if(name == "random") name = _.sample(this.props.master.master).alpha3;

    const country = _.find(this.geometries, (d)=> d.properties.iso === name);
    if(!country){
      utils.log("country not found!");
      return;
    }
    // end

    const p = d3.geo.centroid(country);
    const scale = 2;

    p[0] = -p[0]/this.sensetivity * scale;
    p[1] = p[1]/this.sensetivity * scale;

    this.svg
      .transition()
      .duration(1000)
      .call(this.zoom.scale(scale).translate(p).event);
  }


  shouldComponentUpdate(nextProps) {
    utils.log("shouldComponentUpdate", nextProps, this.props);
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
      this.dataset.setData(nextProps.master.dataset);

      this.color
        .range(colorbrewer[nextProps.master.dataset.colorSet][nextProps.master.dataset.colorNum])
        .domain(nextProps.master.dataset.domain);

      // this.geometries.forEach((d) =>{
      //   d.properties.fillColor = this.getFillColor(d.properties.iso, nextProps.master.dataset.data);
      // });

      let tween = function tween(d, i, a) {
        return d3.interpolate(a, String(value.call(this, d, i)));
      }

      this.svg
      .transition()
      .duration(1000)
      .call(this.zoom
        .scale(nextProps.master.dataset.scale)
        .translate(nextProps.master.dataset.translate)
        .event
      )
      .tween("test", ()=>{
        this.geometries.forEach((d) =>{
          const a = d.properties.fillColor;
          const b = this.getFillColor(d.properties.iso, nextProps.master.dataset.data);
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

    utils.log("shouldComponentUpdate", update ? "yes": "no");
    return update;
  }

  getActiveClass(name){
    return classnames(this.props.vis.active === name ? "active" : "");
  }


  render() {
    utils.log("render globe")

    const paths = this.geometries.map((d, i) =>
      <path key={ i } d={this.path(d)} fill={d.properties.fillColor}></path>);

    const activeGeometry = <path className="activeGeometry" d={this.path(this.activeGeometry)}/>;
    const graticule = <path className="graticule" key="graticule" d={ this.path(this.graticule) } />;

    const name = this.props.master.dataset ? this.props.master.dataset.description : "Keine Daten";
    const quelle = this.props.master.dataset ? this.props.master.dataset.quelle : "Keine Daten";
    const link = this.props.master.dataset ? this.props.master.dataset.link : "";
    const unit = this.props.master.dataset ? this.props.master.dataset.unit : "";

    const legendFields = this.color.range().map((d,i) =>
        <div className="item" key={"item-"+i}>
          <div className="color" key={"color-"+i} style={{ background: d }}>
          </div>
          <div className="label" key={"label-"+i}>
            { (i/9 * this.color.domain()[1]).toFixed(this.props.master.dataset.fixed) }
          </div>
        </div>
    )

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
        <div className="footer">
          <div className="legend">
            { legendFields }
          </div>
          <div className="label">{ name }</div>
          <div className="quelle">Quelle: <a href={ link }>{ quelle }</a></div>
        </div>
      </div>
    );
  }
}
