import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.scss';


@cssModules(styles)
export default class DataSetList extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired
  };

  componentDidMount() {

  }

  render() {
    const list = this.props.master.datasets.map((d, i) => <li key={i} >{ d.name }</li>);

    return (
      <div>
        <h5>DataSets</h5>
        <ul>
          { list }
        </ul>
      </div>
    );
  }
}
