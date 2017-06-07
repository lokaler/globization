import React from 'react';
import PropTypes from 'prop-types';
import styles from './Option.css';

function grid2percent(pos) {
  const gridSize = 5;
  const padding = 3;
  const alpha = 'ABCDEFGH'.split('')
  const xPos = alpha.indexOf(pos[0])
  const yPos = pos[1]-1
  return [
    padding + (xPos/gridSize)*70,
    padding + (yPos/gridSize)*70
  ]
}

export default class Option extends React.Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    opacity: PropTypes.number,
    background: PropTypes.string
  }

  render() {
    const { position, color, label, opacity, onClick } = this.props;
    const noop = () => {}; // eslint-disable-line arrow-body-style
    const percent = grid2percent(position)

    return (
      <div 
        className="option"
        style={{ 
          left: percent[0] + '%',
          top: percent[1] + '%',
          background: color,
          opacity: opacity 
        }}
        onClick={_ => onClick(position)}
      >{label}</div>
      )
  }
}
