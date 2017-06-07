import React from 'react';
import PropTypes from 'prop-types'
import './Grid.css';

export default class Grid extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    // --- for this component only ---
    id: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    disabled: PropTypes.bool.isRequired
  }

  grid2percent(pos) {
    const gridSize = 5;
    const alpha = 'ABCDEFGH'.split('')
    const xPos = alpha.indexOf(pos[0])+1
    const yPos = pos[1]
    return [xPos/gridSize, yPos/gridSize]
  }


  render() {
    console.log(this.props)
    const { source, questions, id, options, disabled, grid } = this.props;

    const gridOverlay = options.choices.map(o => {
      const pos = this.grid2percent(o.pos)
      console.log(pos, o)
      return (
        <div 
          className="choice"
          key={o.pos}
          style={{ 
            left: pos[0]*70 + '%',
            top: pos[1]*70 + '%',
          }}
        >{o.name}</div>
      )
    })

    return (
      <div>
        <div className="choices">
          <img src={source} alt="grid" />
          {gridOverlay}
        </div>
      </div>
    );
  }
}
