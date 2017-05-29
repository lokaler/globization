import React, { PropTypes } from 'react';
// import cssModules from 'react-css-modules';

import Debug from './Debug/Debug';
import Text from './widgets/Text';
import Answer from './widgets/Answer/Answer';
import Input from './widgets/Input';
import Submit from './widgets/Submit';
import RoundChooser from './widgets/RoundList/RoundList';
import DatasetMenu from './widgets/DataSetList/DataSetList';
import Logger from './widgets/logging';
import { googleLogger } from 'logic/logging';
import Footer from '../Footer/Footer';

const widgets = {
  text: Text,
  answer: Answer,
  input: Input,
  submit: Submit,
  roundChooser: RoundChooser,
  datasetMenu: DatasetMenu
};

// @cssModules()
export default class Questionnaire extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
  }

  shouldComponentUpdate(nextProps) {
    const p = this.props;
    const n = nextProps;
    return (
      (p.app !== n.app)
      || (p.questions !== n.questions)
      || (p.master !== n.master)
    );
  }

  getLogger() {
    const { actions, questions } = this.props;
    return new Logger(actions, process.env.NODE_ENV === "development" && questions.debugExpressions);
  }

  createWidgets(questions) {
    const card = questions.cards[questions.activeCard];
    return card.content.map(
      (item, index) => {
        const widgetType = Object.keys(item)[0];
        const Widget = widgets[widgetType];
        if (!Widget) {
          throw new Error(`No widget "${ widgetType }"`);
        }
        return (
          <Widget
            className="widget"
            key={ `${card.key}_${widgetType}_${index}` }
            card={ card }
            { ...item }
            { ...this.props }
          />
        );
      });
  }

  render() {
    const { questions } = this.props;

    if (questions.cards.length === 0) {
      return <div />;
    }

    this.getLogger().clear();

    return (
      <div className="card">
        { process.env.NODE_ENV === "development" && false &&
          <Debug { ...this.props }/>
        }
        { 
          this.createWidgets(questions)
        }
        <Footer { ...this.props }/>
      </div>
    );
  }
}
