import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import DataSetList from './DataSetList/DataSetList';
import RoundList from './RoundList/RoundList';
import TranslatedMarkdown from './TranslatedMarkdown';
import { sponLogger } from 'logic/logging';
import * as texts from 'data/texts';


@cssModules()
export default class Intro extends React.Component {

  static propTypes = {
    questions: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  onClick = (evt) => {
    const handler = this.clickHandlers[evt.target.dataset.onclick];
    if (handler) {
      handler(evt);
    }
  }

  clickHandlers = {
    onStartClick: () => {
      sponLogger();
      this.props.actions.setCard(0);
    }
  }

  render() {
    return (
      <div onClick={ this.onClick }>
        <RoundList { ...this.props } />
        <TranslatedMarkdown text={ texts.intro }/>
        <DataSetList { ...this.props } />
      </div>
    );
  }
}
