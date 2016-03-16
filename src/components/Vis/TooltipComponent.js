/* eslint-disable */

import React, { PropTypes } from 'react';
// import utils from './VisUtils';
import cssModules from 'react-css-modules';
import styles from './vis.scss';

@cssModules(styles)

export default class TooltipComponent extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired
  };

  componentDidMount() {

  }

  getCountryName(iso){
    const d = this.props.master.master.filter(d => d.alpha3 === iso);
    return d.length ? d[0].name_deu : '';
  }

  render() {
    // utils.log('render tooltip', this.props.vis.tooltip);

    const { x, y, active, value, iso, unit } = this.props.vis.tooltip;
    const countryName = this.getCountryName(iso);

    return (
      <div
        className={`tooltip ${ active ? 'active' : ''}`}
        style={{ transform: `translate(${x}px, ${y}px)` }}
      >
        <div className="inner">
          { countryName }: { value } { unit }
         </div>
      </div>
    );
  }
}
