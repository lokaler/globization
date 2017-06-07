/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import d3 from 'd3';
import utils from './VisUtils.js'
import translate from 'logic/translate';

export default class ScatterLegendComponent extends React.Component {

  static propTypes = {

  };

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    utils.log("render Legend", this.props.color.domain());

    const dataset = this.props.questions.dataset;
    const description = translate(dataset.description);
    const quelle= translate(dataset.quelle);
    const link = dataset.link;
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
      <div className="scatterLegend">
      <div className="label">{ description }</div>
      <div className="quelle">{translate('Source')}: <a href={ link }>{ quelle }</a></div>
      <div className="vergleich">{ translate("gdp") }</div>
      </div>

    )
  }

}
