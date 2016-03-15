/* eslint-disable */

import React, { PropTypes } from 'react';
import d3 from 'd3';
import utils from './VisUtils.js'

export default class DotsComponent extends React.Component {

  static propTypes = {
    xScale: React.PropTypes.func.isRequired,
    yScale: React.PropTypes.func.isRequired,
    master: React.PropTypes.object.isRequired,
    transitionDuration: React.PropTypes.number.isRequired
  };

  componentDidMount() {

    console.log("DOTS mount", this.props)

    this.g = d3.select(this.refs.g);

    if(this.props.master.dataset) this.renderData();
  }

  componentWillUnmount(){
    this.g.remove();
  }

  componentDidUpdate(prevProps, prevState) {
    utils.log("DOTS componentDidUpdate", prevProps)

    this.renderData()
  }

  mouseenter(d){
    utils.log("tooltip", d)

    const x = this.props.xScale;
    const y = this.props.yScale;

    this.props.actions.changeVis({
      tooltip: {
        active: true,
        text: `${d.iso}: ${d.value}`,
        x: x(d.vergleich),
        y: y(d.value)
      }
    });

  }

  mouseleave(d){

    utils.log("leave")

    this.props.actions.changeVis({
      tooltip: {
        active: false
      }
    });

  }

  renderData() {
    utils.log("dots render", this.props.xScale.domain(), this.props.yScale.domain(), this.props.master.dataset.data.length)

    const x = this.props.xScale;
    const y = this.props.yScale;
    const data = this.props.master.dataset.data;

    const item = this.g.selectAll('circle')
          .data(data, d => d.iso );

    item.enter()
      .append('circle')
      .attr('class', 'item')
      .style('opacity', 0)
      .on("mouseenter", this.mouseenter.bind(this))
      .on("mouseleave", this.mouseleave.bind(this))

    item
      .transition()
      .duration(this.props.transitionDuration)
      .attr('r', function(d) { return 5+Math.random()*5; })
      .attr('cx', function(d) { return x(d.vergleich); })
      .attr('cy', function(d) { return y(d.value); })
      .style('opacity', 1)

    item.exit().filter(':not(.exiting)')
      .transition()
      .duration(this.props.transitionDuration)
      .style('opacity', 0)
      .remove()

  }

  render() {
    return (
      <g ref='g' />
    )
  }

}
