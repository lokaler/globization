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
  onStartClick() {
    this.props.actions.setCard(0, null);
  }
  render() {
    const boundClickHandler = this.onStartClick.bind(this);

    return (<div>
      <h1>ÜberMorgen-Explorer</h1>
      <p>Vergleichen Sie Ihr Konsumverhalten mit dem von Menschen in anderen Ländern.
      Und finden Sie heraus, wie Sie Umwelt und Ressourcen schonen können.</p>
      <div className="losButton" onClick={ boundClickHandler }>Los geht’s</div>
      <p>Oder erkunden Sie die Datensätze auf eigene Faust:</p>
      <DataSetList { ...this.props } />
    </div>);
  }
}
