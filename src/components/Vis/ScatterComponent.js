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

    const dataset = this.props.master.dataset;

    this.svg = null;
    // this.dataset = new Dataset();
    this.margin = {top: 40, right: 50, bottom: 100, left: 80}
    this.innerWidth = this.props.width - this.margin.left - this.margin.right
    this.innerHeight = this.props.height - this.margin.top - this.margin.bottom
    this.padding = 10;

    this.x = d3.scale.linear()
      .range([this.padding,this.innerWidth - this.padding*2])
      .clamp(true).nice()

    this.y = d3.scale.linear()
      .range([this.innerHeight - this.padding*2,this.padding])
      .clamp(true).nice()


    if(dataset){
        this.x.domain(dataset.vergleichDomain);
        this.y.domain(dataset.domain);
    }

    utils.log("DATASET",this.y.domain(), this.x.domain())
  }


  shouldComponentUpdate(nextProps) {
    utils.log("scatter shouldComponentUpdate", nextProps, this.props);
    let update = false;

    if(nextProps.master.dataset != this.props.master.dataset) {

      this.x.domain(nextProps.master.dataset.vergleichDomain);
      this.y.domain(nextProps.master.dataset.domain);

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
          <AxisComponent
            className='x axis'
            scale={this.x}
            tickFormat={ (d) => d/1000 }
            orient='bottom'
            transform={`translate(0, ${this.innerHeight})`}
            transitionDuration={1000}
          />
          <AxisComponent
            tickSize={this.innerWidth}
            className='y axis'
            tickFormat={ d3.format(".1f") }
            scale={this.y}
            orient='right'
            transform={`translate(${this.innerWidth}, 0)`}
            transitionDuration={1000}
          />
          <DotsComponent {...this.props}
            tickSize={-this.innerWidth}
            className='dots'
            xScale={this.x}
            yScale={this.y}
            transitionDuration={1000}
          />
        </g>

        </svg>
      </div>
    );
  }
}
