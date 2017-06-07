/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './vis.css';
import translate from '../../logic/translate';

export default class TooltipComponent extends React.PureComponent {

  static propTypes = {
    tooltip: PropTypes.object.isRequired
  };

  render() {
    const { x, y, active, value, iso, unit } = this.props.tooltip;
    const name = translate(iso, { isCountryCode: true });
    const slug = value != undefined ? translate(value) + " " + translate(unit) : translate("no data");

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
