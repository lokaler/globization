import React, { PropTypes } from 'react';
import { component } from './SliderHistogram.scss';

export default class SliderHistogram extends React.Component {

  static propTypes = {
    histogramData: PropTypes.object.isRequired
  }

  render() {
    const { histogramData } = this.props;
    return (
      <div className={ component }>
        <h1>SliderHistogram</h1>
        <code>{ JSON.stringify(histogramData) }</code>
      </div>
    );
  }
}
