import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.scss';

@cssModules(styles)
export default class UbermorgenApp extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
  };

  render() {
    const appState = this.props.appState;

    return (
      <div>
        <h1 styleName="h1" test="foo" {...appState}>UbermorgenApp</h1>
        <h2 styleName="h2" {...appState}>lorem ipsum...</h2>
      </div>
    );
  }
}
