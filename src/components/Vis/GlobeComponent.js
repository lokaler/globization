/* eslint-disable */

import React, { PropTypes } from 'react';
import d3 from 'd3';
import _ from 'lodash';
import utils from './VisUtils.js'
import colorbrewer from 'colorbrewer'
import Dataset from '../../logic/Dataset.js'
import cssModules from 'react-css-modules';
import styles from './globe.scss';

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

    this.dataset = new Dataset(this.props.master.dataset);

    this.projection = d3.geo.orthographic()
      .translate([this.props.width / 2, this.props.height / 2])
      .clipAngle(90)

    this.path = d3.geo.path()
      .projection(this.projection);

    this.color = d3.scale.quantile()
      // .range(colorbrewer[this.props.master.dataset.colorSet][this.props.master.dataset.colorNum])
      // .domain(this.props.master.dataset.domain);

    // dunnow if this should be done here!
    this.geometries = this.props.vis.topojson.map((d) => d);
    this.geometries.forEach((d) => {
      d.properties.iso = this.dataset.getIsoForId(d.id);
      //d.properties.fillColor = this.getFillColor(d.id);
      d.properties.strokeColor = "#777777";
    })

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

  getFillColor(id, data){
    const val = this.getValueForCountry(id, data);
    // return val ? this.color(val) : "url(#pattern-stripe)";
    return val ? this.color(val) : "#EEE";
  }

  getValueForCountry(id, data){
    const entry = _.find(this.props.master.master, { numeric: id+""});
    let val = undefined;
    if(entry) val = _.find(data, { iso: entry.alpha3 });
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

    this.svg
      //.call(this.zoom.scale(this.props.vis.zoom).translate(this.props.vis.translate))
      .transition()
      .duration(1000)
      .call(this.zoom.scale(scale).translate(p).event);
  }


  shouldComponentUpdate(nextProps) {
    utils.log("shouldComponentUpdate", nextProps, this);
    let update = false;

    if(nextProps.vis.animation) {
      this[nextProps.vis.animation.action](nextProps.vis.animation.payload);
      update = false;
    }

    if(nextProps.master.dataset != this.props.master.dataset) {
      this.color
        .range(colorbrewer[nextProps.master.dataset.colorSet][nextProps.master.dataset.colorNum])
        .domain(nextProps.master.dataset.domain);

      // console.log(nextProps.master.dataset, d3.extent(nextProps.master.dataset.data, (d) => d.value*1))

      this.geometries.forEach((d) =>{
        d.properties.fillColor = this.getFillColor(d.id, nextProps.master.dataset.data);
      });

      update = true;
    }

    utils.log("shouldComponentUpdate", update ? "yes": "no");
    return update;
  }


  render() {
    utils.log("render globe")

    const paths = this.props.vis.topojson.map((d, i) => <path key={ i } d={this.path(d)} fill={d.properties.fillColor}></path>);
    const graticule = <path className="graticule" key="graticule" d={ this.path(d3.geo.graticule()()) } />;

    const name = this.props.master.dataset ? this.props.master.dataset.name : "Keine Daten";
    const unit = this.props.master.dataset ? this.props.master.dataset.unit : "";
    const legendFields = this.color.range().map((d,i) => {
      return <div key={ i } style={{ background: d }}>{ (i/9 * this.color.domain()[1]).toFixed(this.props.master.dataset.fixed) }</div>;
    })

    return (
      <div>
        <svg className='globe' ref='globeSVG' width={ this.props.width } height={ this.props.height }>
          <defs>
            { utils.svgStripePattern }
          </defs>
          <g>
            { graticule }
            { paths }
          </g>
        </svg>
        <div className="footer">
          { name } ({ unit })
           <div className="legend">
           { legendFields }
           </div>
        </div>
      </div>
    );
  }
}
