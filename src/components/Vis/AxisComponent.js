/* eslint-disable */

import React, { PropTypes } from 'react';
import d3 from 'd3';
import utils from './VisUtils.js'

export default class AxisComponent extends React.Component {

  static propTypes = {
    scale: PropTypes.func.isRequired,
    orient: PropTypes.string.isRequired,
    transitionDuration: PropTypes.number.isRequired
  };


  componentDidMount() {

    this.axis = d3.svg.axis()
      .scale(this.props.scale)
      .orient(this.props.orient)
      // .tickSize(this.props.tickSize)
      .tickFormat(this.props.tickFormat)
      // .tickValues(this.props.scale.domain())

    d3.select(this.refs.g).call(this.axis);
  }

  componentDidUpdate(prevProps, prevState) {
    this.axis
      .scale(this.props.scale)
      .orient(this.props.orient)
      .tickFormat(this.props.tickFormat);

    d3.select(this.refs.g).transition().duration(this.props.transitionDuration)
      .call(this.axis);
  }

  render() {
    utils.log("render Axis");
    return (
      <g ref='g' {...this.props} />
    )
  }

}
