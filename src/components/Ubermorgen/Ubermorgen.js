import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.scss';
import Vis from '../Vis/VisWrapper';
import Questionnaire from '../Questionnaire/Questionnaire';
import DataSetList from './DataSetList';

@cssModules(styles)
export default class UbermorgenApp extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.actions.requestDataSets('./data/datasets.json');
  }

  render() {
    return (
      <div>
        <h3 {...this.props}>UbermorgenApp</h3>
        <div styleName="container">
          <div styleName="left">
            <Vis {...this.props}/>
          </div>
          <div styleName="right">
            <Questionnaire {...this.props}/>
          </div>
        </div>
        <div>
          <DataSetList {...this.props}/>
        </div>
      </div>
    );
  }
}
