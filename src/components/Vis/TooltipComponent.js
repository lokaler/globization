/* eslint-disable */

import React, { PropTypes } from 'react';
// import utils from './VisUtils';
// import cssModules from 'react-css-modules';
import styles from './vis.css';
import translate from '../../logic/translate';

// @cssModules(styles)

export default class TooltipComponent extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired
  };

  componentDidMount() {

  }


  render() {
    // console.log('render tooltip', this.props.vis.tooltip);
    const { hideCard } = this.props.questions;
    const { x, y, active, value, iso, unit } = this.props.vis.tooltip;
    const name = translate(iso, { isCountryCode: true });
    const slug = value != undefined ? translate(value) + " " + translate(unit) : translate("no data");

    if(!hideCard){
      return null;
    }

    return (
      <div
        className={`tooltip ${ active ? 'active' : ''}`}
        style={{ transform: `translate(${x}px, ${y}px)` }}
      >
        <div className="inner">
          { name }: { slug }
         </div>
      </div>
    );
  }
}
