import React, { PropTypes } from 'react';


export default class Questionnaire extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
  };

  state = {
    data: null
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    try {
      const response = await fetch('/data/questionnaire.json');
      const data = await response.json();
      this.setState({ data });
    } catch (e) {
      throw e;
    }
  }

  render() {
    const data = JSON.stringify(this.state.data);
    return (
      <div>
        <h3>Questionnaire</h3>
        <code>
          { data }
        </code>
      </div>
    );
  }
}
