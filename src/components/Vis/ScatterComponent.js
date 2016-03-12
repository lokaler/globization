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

    this.x = d3.scale.linear().range([0,this.innerWidth])
    this.y = d3.scale.linear().range([this.innerHeight,0])

    this.axis = null;

    this.xAxis = d3.svg.axis()
      .scale(this.x)
      .orient("bottom");

    this.yAxis = d3.svg.axis()
        .scale(this.y)
        .orient("right")
        .tickFormat(d3.format("s"))

    this.zoom = d3.behavior.zoom()
      .center([0,0])
      .scaleExtent([1,5])
      .size([this.width,this.height])
      .on("zoom", () => {
        const e = d3.event;

        utils.log("zoom",this.zoom.translate(), this.zoom.scale());

        this.forceUpdate();
      })
      .on("zoomend", () => {
        utils.log("zoomend")

      })


  }

  yValue(name) {
    let e = _.find(this.props.master.master, { alpha3: name });
    if(!e) console.log(name, "not defined!");
    return this.y(e.gdp);
  }

  componentDidMount() {
    utils.log("componentDidMount", this.props)

    this.svg = d3.select(this.refs.scatterSVG)
      .append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")")

    //this.svg.call(this.zoom)

    this.axis = this.svg.append("g");

    this.axis.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + this.innerHeight + ")")
          .call(this.xAxis)
        .append("text")
          .attr("class", "label")
          .attr("x", this.innerWidth)
          .attr("y", -6)
          .style("text-anchor", "end")
          // .text("fleischkonsum (kg/woche)");

    this.axis.append("g")
          .attr("class", "y axis")
          .attr("transform", "translate(" + this.innerWidth + ",0)")
          .call(this.yAxis)
        .append("text")
          .attr("class", "label")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")

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
      this.y.domain(d3.extent(this.props.master.master, function(d) { return d.gdp*1; }));

      this.axis.select(".x.axis").call(this.xAxis);
      this.axis.select(".y.axis").call(this.yAxis);

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

    // if(!this.props.master.dataset) return;

    let paths = "";

    if(this.props.master.dataset){
      paths = this.props.master.dataset.data.map((d, i) =>
            <path key={ i } d={ utils.pathCircle(this.x(d.value), this.yValue(d.iso), 5) } ></path>);
    }

    return (
      <div>
        <svg className='scatter' ref='scatterSVG' width={ this.props.width } height={ this.props.height }>
          <g>
          {paths}
          </g>
        </svg>
      </div>
    );
  }
}
