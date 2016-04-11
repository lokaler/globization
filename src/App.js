// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UbermorgenApp from './components/Ubermorgen/Ubermorgen';
import { actions } from './ducks/index';


class App extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    vis: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
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
    vis: state.vis,
    master: state.master,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
