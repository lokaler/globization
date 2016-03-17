/* eslint-disable */

import React, { PropTypes } from 'react';
import d3 from 'd3';
import utils from './VisUtils.js'
import translate from 'logic/translate';

export default class MapLegendComponent extends React.Component {

  static propTypes = {

  };

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    utils.log("render Legend", this.props.color.domain());

    const dataset = this.props.master.dataset;
    const description = translate(dataset.description);
    const quelle= dataset.quelle;
    const link = dataset.link;
    const color = this.props.color;
    const domain = color.domain();

    const legendFields = color.range().map((d,i) =>
        <div className="item" key={"item-"+i}>
          <div className="color" key={"color-"+i} style={{ background: d }}>
          </div>
          <div className="label" key={"label-"+i}>
            { translate((domain[0]+ (i/9 * (domain[1]-domain[0]))).toFixed(dataset.fixed)) }
          </div>
        </div>
    )

    return (
      <div className="footer">
        <div className="legend">
          { legendFields }
        </div>
        <div className="label">{ description }</div>
        <div className="quelle">
          { translate('Source') }:
          <a href={ link }>{ quelle }</a>
        </div>
      </div>

    )
  }

}
