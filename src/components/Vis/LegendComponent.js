/* eslint-disable */

import React, { PropTypes } from 'react';
import d3 from 'd3';
import utils from './VisUtils.js'

export default class LegendComponent extends React.Component {

  static propTypes = {

  };

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    utils.log("render Legend", this.props.color.domain());

    const name = this.props.master.dataset.description;
    const quelle= this.props.master.dataset.quelle;
    const link = this.props.master.dataset.link;
    const dataset = this.props.master.dataset;
    const color = this.props.color;

    const legendFields = color.range().map((d,i) =>
        <div className="item" key={"item-"+i}>
          <div className="color" key={"color-"+i} style={{ background: d }}>
          </div>
          <div className="label" key={"label-"+i}>
            { (i/9 * color.domain()[1]).toFixed(dataset.fixed) }
          </div>
        </div>
    )

    return (
      <div className="footer">
        <div className="legend">
          { legendFields }
        </div>
        <div className="label">{ name }</div>
        <div className="quelle">Quelle: <a href={ link }>{ quelle }</a></div>
      </div>

    )
  }

}
