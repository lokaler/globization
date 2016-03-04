import React, { PropTypes } from 'react';
export default class Data extends React.Component {

  static propTypes = {
    onClickLoad: PropTypes.func.isRequired,
    onClickEdit: PropTypes.func.isRequired
  }

  render() {
    const { onClickLoad, onClickEdit } = this.props;
    return (
      <div>
        <button onClick={ onClickLoad }>Load Data</button>
        <button onClick={ onClickEdit }>Edit Data</button>
      </div>
    );
  }
}
