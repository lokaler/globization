// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UbermorgenApp from './components/Ubermorgen/Ubermorgen';
import * as appActions from './actions/actions';

class App extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired
  }

  render() {
    return (
        <UbermorgenApp {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions,
    vis: state.vis
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
