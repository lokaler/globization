/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import d3 from 'd3';
import utils from './VisUtils.js'

export default class DotsComponent extends React.Component {

  static propTypes = {
    xScale: PropTypes.func.isRequired,
    yScale: PropTypes.func.isRequired,
    transitionDuration: PropTypes.number.isRequired
  };

  componentDidMount() {

    this.g = d3.select(this.refs.g);
    if(this.props.questions.dataset) this.renderData();
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
    const margin = this.props.margin;
    const unit = this.props.questions.dataset.unit;

    this.props.actions.changeVis({
      tooltip: {
        active: true,
        text: `${d.iso}: ${d.value}`,
        iso: d.iso,
        value: d.value,
        unit,
        x: x(d.vergleich)+margin.left,
        y: y(d.value)+margin.top
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
    //utils.log("dots render", this.props.xScale.domain(), this.props.yScale.domain(), this.props.questions.dataset.data.length)

    // console.log(this.props.color.range().pop());

    const color = this.props.color.range()[4];
    const x = this.props.xScale;
    const y = this.props.yScale;
    const data = this.props.questions.dataset.data;
    const active = this.props.active;

    const item = this.g.selectAll('circle')
          .data(data, d => d.iso );

    item.enter()
      .append('circle')
      .attr('class', 'item')
      .attr('fill', color)
      .style('opacity', 0)
      .on("mouseenter", this.mouseenter.bind(this))
      .on("mouseleave", this.mouseleave.bind(this))

    item
      .classed("active", d=> d.iso == active)
      .sort((a,b)=>{
        return (a.iso == active) - (b.iso == active);
      })
      .transition()
      .duration(this.props.transitionDuration)
      // .attr('r', function(d) { return 5+Math.random()*5; })
      .attr('r', function(d) { return 6; })
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
