/* eslint-disable */

import React, { PropTypes } from 'react';
import d3 from 'd3';
import utils from './VisUtils.js'

export default class DotsComponent extends React.Component {

  static propTypes = {
    xScale: React.PropTypes.func.isRequired,
    yScale: React.PropTypes.func.isRequired,
    data: React.PropTypes.array.isRequired,
    transitionDuration: React.PropTypes.number.isRequired
  };

  componentDidMount() {

      console.log("mount", this.props)

      this.g = d3.select(this.refs.g);
      this.tooltip = d3.select(this.refs.tooltip);
      this.tooltip.append("text").text("tooltip").attr("dy", "-1em")

      if(this.props.data) this.renderData();
    }

    componentWillUnmount(){
      utils.log("UNMOUNTING")
      this.g.remove();
    }

    componentDidUpdate(prevProps, prevState) {
      utils.log("prevProps", prevProps)

      this.renderData()
    }

    mouseenter(d, a){

      this.tooltip
        .attr("transform", `translate(${this.props.xScale(d.value)}, ${this.props.yScale(d.y)})`)
        .select("text")
        .text(d.iso + " " + d.value)
    }

    renderData() {
      utils.log("render", this)
      var x = this.props.xScale;
      var y = this.props.yScale;
      var data = this.props.data.data;

      var item = this.g.selectAll('circle')
            .data(data, d => d.iso );

      item.enter()
        .append('circle')
        .attr('class', 'item')
        .style('opacity', 0)
        .on("mouseenter", this.mouseenter.bind(this))

      item
        .transition()
        .duration(this.props.transitionDuration)
        .attr('r', function(d) { return 5; })
        .attr('cx', function(d) { return x(d.value); })
        .attr('cy', function(d) { return y(d.y); })
        .style('opacity', 1)

      item.exit().filter(':not(.exiting)')
        .transition()
        .duration(this.props.transitionDuration)
        .style('opacity', 0)
        .remove()

    }

    render() {
      return (
        <g>
          <g ref='g' />
          <g ref='tooltip' className='tooltip' />
        </g>
      )
    }

}
