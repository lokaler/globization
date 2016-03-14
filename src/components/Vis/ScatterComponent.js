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
import AxisComponent from './AxisComponent.js';
import DotsComponent from './DotsComponent.js';


@cssModules(styles)

export default class ScatterComponent extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    utils.log("constructor scatter", this.props)

    this.svg = null;
    this.dataset = new Dataset();
    this.margin = {top: 40, right: 80, bottom: 40, left: 40}
    this.innerWidth = this.props.width - this.margin.left - this.margin.right
    this.innerHeight = this.props.height - this.margin.top - this.margin.bottom

    this.color = d3.scale.quantile();

    this.geometries = this.props.master.topojson;

    this.x = d3.scale.linear().range([0,this.innerWidth]).clamp(true).nice();
    this.y = d3.scale.linear().range([this.innerHeight,0]).clamp(true).nice();



  }

  yValue(name) {
    let e = _.find(this.props.master.master, { alpha3: name });
    if(!e) { console.log(name, "not defined!"); e = { gdp : 0 } }

    // return this.y(e.gdp);
    return e.vergleich;
  }

  componentDidMount() {
    utils.log("componentDidMount", this.props)

    this.svg = d3.select(this.refs.scatterSVG)

    //this.svg.call(this.zoom)


  }
  componentWillUnmount(){
    utils.log("UNMOUNTING")
    this.svg.remove();
  }


  shouldComponentUpdate(nextProps) {
    utils.log("shouldComponentUpdate", nextProps, this.props);
    let update = false;

    if(nextProps.master.dataset != this.props.master.dataset) {
      this.dataset.setData(nextProps.master.dataset);

      this.color
        .range(colorbrewer[nextProps.master.dataset.colorSet][nextProps.master.dataset.colorNum])
        .domain(nextProps.master.dataset.domain);

      this.x.domain(nextProps.master.dataset.domain);
      this.y.domain(d3.extent(this.props.master.master, function(d) { return d.vergleich; }));

      nextProps.master.dataset.data.forEach(d => {
        // todo: not here !
        d.y = this.yValue(d.iso);
      })

      update = true;
    }


    utils.log("shouldComponentUpdate", update ? "yes": "no");
    return update;
  }

  getActiveClass(name){
    return classnames(this.props.vis.active === name ? "active" : "");
  }


  render() {
    utils.log("render scatter")


    return (
      <div>
        <svg className='scatter' ref='scatterSVG' width={ this.props.width } height={ this.props.height }>

        <g transform={`translate(${this.margin.left}, ${this.margin.top})`}>
          <AxisComponent className='x axis' scale={this.x} tickFormat={ d3.format("s") } orient='bottom' transform={`translate(0, ${this.innerHeight})`}  transitionDuration={1000} />
          <AxisComponent className='y axis' scale={this.y} tickFormat={ d3.format("s") } orient='right' transform={`translate(${this.innerWidth}, 0)`}  transitionDuration={1000} />
          <DotsComponent className='dots' xScale={this.x} yScale={this.y} transitionDuration={1000} data={this.props.master.dataset}/>
        </g>

        </svg>
      </div>
    );
  }
}
