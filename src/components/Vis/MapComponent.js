/* eslint-disable */

import React, { PropTypes } from 'react';
import d3 from 'd3';
import d3_projection from './libs/d3.projection.js';
import topojson from 'topojson';
import ReactDom from 'react-dom';

export default class MapComponent extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    d3_projection(d3);

    console.log("constructor map", this.props.vis)

    this.sensetivity = 0.25;

    this.projection = d3.geo.winkel3()
      .scale(this.props.vis.initialScale * this.props.vis.zoom)
      .rotate([(this.props.vis.translate[0]/this.props.vis.zoom) * this.sensetivity, -(this.props.vis.translate[1]/this.props.vis.zoom) * this.sensetivity, 0])
      .translate([this.props.width / 2, this.props.height / 2])

    this.path = d3.geo.path()
      .projection(this.projection);

    this.zoom = d3.behavior.zoom()
      .center([0,0])
      .scale(this.props.vis.zoom)
      .translate(this.props.vis.translate)
      .on("zoom", () => {
        const e = d3.event;

        const _scale = this.props.vis.initialScale * e.scale;
        const _rotate = [(e.translate[0]/e.scale) * this.sensetivity, -(e.translate[1]/e.scale) * this.sensetivity, 0];
        const _zoom = e.scale;
        const _translate = e.translate;

        this.projection
          .rotate(_rotate)
          .scale(_scale);

        this.props.actions.changeVis({ translate: _translate, zoom: _zoom, scale: _scale, rotate: _rotate });
      })

      // .on("zoomend", () => {
      //   const e = d3.event;
      //   this.props.actions.changeVis({ scale: e.scale, translate: e.translate });
      // })

    //d3.select(ReactDom.findDOMNode(this.refs.globeSVG)).call(zoom)
  }

  componentDidMount() {
    //this.props.actions.updatePaths([1, 2, 3, 4]);
    d3.select(this.refs.mapSVG).call(this.zoom)
  }

  componentWillUnmount(){

  }


  render() {
    console.log("render map", this.props.vis)

    const paths = this.props.vis.topojson.map((d, i) => <path key={i} d={this.path(d)}></path>);

    return (
      <div>
        <svg ref='mapSVG' width={ this.props.width } height={ this.props.height }>
          <g>
            {paths}
          </g>
        </svg>
      </div>
    );
  }
}
