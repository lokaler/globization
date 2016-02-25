import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.scss';
import Globe from '../Globe/Globe';
import Questionnaire from '../Questionnaire/Questionnaire';

@cssModules(styles)
export default class UbermorgenApp extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <h3 {...this.props}>UbermorgenApp</h3>
        <div styleName="container">
          <div styleName="left">
            <Globe {...this.props}/>
          </div>
          <div styleName="right">
            <Questionnaire {...this.props}/>
          </div>
        </div>
      </div>
    );
  }
}
