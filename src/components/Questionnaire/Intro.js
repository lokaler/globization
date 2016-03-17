import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import DataSetList from '../Ubermorgen/DataSetList';
import TranslatedMarkdown from './TranslatedMarkdown';
import * as texts from 'data/texts';


@cssModules()
export default class Intro extends React.Component {

  static propTypes = {
    questions: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired
  }

  onClick = (evt) => {
    const handler = this.clickHandlers[evt.target.dataset.onclick];
    if (handler) {
      this.props.actions.sponLogger();
      handler(evt);
    }
  }

  clickHandlers = {
    onStartClick: () => {
      this.props.actions.setCard(0, null);
    }
  }

  render() {
    return (
      <div onClick={ this.onClick }>
        <TranslatedMarkdown text={ texts.intro }/>
        <DataSetList { ...this.props } />
      </div>
    );
  }
}
