import React, { PropTypes } from 'react';
import utils from './VisUtils';
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

  render() {
    utils.log('render tooltip', this.props.vis.tooltip);

    const { x, y, text, active } = this.props.vis.tooltip;

    return (
      <div
        className={`tooltip ${ active ? 'active' : ''}`}
        style={{ transform: `translate(${x}px, ${y}px)` }}
      >
        { text }
      </div>
    );
  }
}
