import React, { PropTypes } from 'react';
import { component } from './SliderHistogram.scss';
import d3 from 'd3';

export default class SliderHistogram extends React.Component {

  static propTypes = {
    histogramData: PropTypes.object.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }

  // constructor(props){
  //   super(props);
  //   console.log(props)
  // }

  makeHistogramData() {
    const { histogramData, min, max } = this.props;
    const step = (max - min) / 10;

    const data = d3.range(10)
      .map(i => {
        const a = (i) * step;
        const b = (i + 1) * step;

        const count = Object.entries(histogramData)
          .filter(k => (k[0] > a && k[0] <= b))
          .map(k => k[1])
          .reduce((prev, curr) => prev + curr, 0);

        return { key: a, value: count };
      });

    const maxVal = d3.max(data, d => d.value);

    return data.map(d => {
      const height = (d.value / maxVal) * 100;
      return { ...d, height };
    });

    // const scale = d3.scale.linear()
    //   .domain([min, max])
    //   .range([min, max]);

    // const data = d3.layout.histogram()
    // .bins(scale.ticks(10))(histogramData.values());
  }


  render() {
    // const { histogramData } = this.props;
    // console.log(this.makeHistogramData());

    const histograms = this.makeHistogramData().map(d => (
      <div
        key={ d.key }
        style={{ height: `${ d.height }%`, bottom: `${ d.height }%` }}
        className="bin"
      >
        { d.value }
      </div>
    ));

    return (
      <div className={ component }>
        { histograms }
      </div>
    );
  }
}
