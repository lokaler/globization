import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import DataSetList from '../Ubermorgen/DataSetList';

@cssModules()
export default class Outro extends React.Component {

  static propTypes = {
    questions: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired
  }

  render() {
    return (<div>
      <h1>ÜberMorgen-Explorer</h1>
      <p>Vergleichen Sie Ihr Konsumverhalten mit dem von Menschen in anderen Ländern.
      Und finden Sie heraus, wie Sie Umwelt und Ressourcen schonen können.</p>
      <DataSetList { ...this.props } />
    </div>);
  }

}
