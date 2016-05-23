import React, { PropTypes } from 'react';
import { component } from './ChoicesHistogram.scss';

export default class SliderHistogram extends React.Component {

  static propTypes = {
    histogramData: PropTypes.object.isRequired
  }

  render() {
    const { histogramData } = this.props;

    return (
      <div className={ component } histogramData={ histogramData }>SliderHistogram</div>
    );
  }
}
