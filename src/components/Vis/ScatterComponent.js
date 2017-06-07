/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import d3 from 'd3';
import _ from 'lodash';
import utils from './VisUtils.js'
import colorbrewer from 'colorbrewer'
import Dataset from '../../logic/Dataset.js'
import styles from './globe.css';
import classnames from 'classnames';
import AxisComponent from './AxisComponent.js';
import DotsComponent from './DotsComponent.js';
import translate from 'logic/translate';
import { numberWithThousandsSeparator } from 'logic/formatting';

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

    const dataset = this.props.questions.dataset;

    this.svg = null;
    // this.dataset = new Dataset();
    this.margin = {top: 60, right: 40, bottom: 70, left: 50}
    this.innerWidth = this.props.width - this.margin.left - this.margin.right
    this.innerHeight = this.props.height - this.margin.top - this.margin.bottom
    this.padding = 10;

    this.x = d3.scale.linear()
      .range([this.padding,this.innerWidth - this.padding*2])
      .clamp(true).nice()

    this.y = d3.scale.linear()
      .range([this.innerHeight - this.padding*2,this.padding])
      .clamp(true).nice()


    if(dataset && dataset.key !== 'none'){
        this.x.domain(dataset.vergleichDomain);
        this.y.domain(dataset.domain);
    }

    utils.log("DATASET",this.y.domain(), this.x.domain())
  }


  componentWillReceiveProps(nextProps) {
    utils.log("scatter shouldComponentUpdate", nextProps, this.props);
    let update = false;

    if(nextProps.questions.dataset != this.props.questions.dataset) {

      this.x.domain(nextProps.questions.dataset.vergleichDomain);
      this.y.domain(nextProps.questions.dataset.domain);

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
            tickFormat={ (d) => translate(numberWithThousandsSeparator(d)) }
            orient='bottom'
            transform={`translate(0, ${this.innerHeight})`}
            transitionDuration={1000}
          />
          <AxisComponent
            tickSize={this.innerWidth}
            className='y axis'
            tickFormat={ (d)=> translate(d) }
            fixed={ this.props.questions.dataset.fixed }
            scale={this.y}
            orient='left'
            transform={`translate(0, 0)`}
            transitionDuration={1000}
          />
          <DotsComponent {...this.props}
            active={this.props.vis.active}
            tickSize={-this.innerWidth}
            className='dots'
            fixed={ this.props.questions.dataset.fixed }
            xScale={this.x}
            yScale={this.y}
            margin={this.margin}
            transitionDuration={1000}
          />
        </g>

        </svg>
      </div>
    );
  }
}
