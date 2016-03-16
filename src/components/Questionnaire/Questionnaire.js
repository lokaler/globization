import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

import Intro from './Intro';
import Text from './widgets/Text';
import Answer from './widgets/Answer';
import Input from './widgets/Input';
import Footer from './Footer';
//import Outro from './Outro';

const WidgetFactory = {
  text: React.createFactory(Text),
  answer: React.createFactory(Answer),
  input: React.createFactory(Input)
};

@cssModules()
export default class Questionnaire extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    master: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.loadData();
  }

  onClickLoad = () => {
    this.loadData();
  }

  onClickEdit = () => {
    throw new Error('Editing is not implemented, yet!');
  }

  loadData() {
    this.props.actions.requestQuestionData('./data/questionnaire.json');
  }

  createWidgets(questions) {
    return questions.questionData[questions.activeCard].content
      .map((item, index) => {
        const widgetKey = Object.keys(item)[0];
        return WidgetFactory[widgetKey]({
          ...item,
          ...this.props,
          key: `${+new Date()}_${widgetKey}_${index}`
        });
      }
    );
  }

  render() {
    const questions = { ...this.props.questions };
    if (questions.questionData.length === 0) {
      return <div />;
    }

    let widgets = null;
    let nextBtnLabel = 'Weiter';

    if (questions.activeCard === -1) {
      widgets = <Intro { ...this.props }/>;
    } else if (questions.activeCard === questions.questionData.length - 1) {
      // widgets = <Outro { ...this.props }/>;
      widgets = this.createWidgets(questions);
    } else {
      widgets = this.createWidgets(questions);

      if (questions.activeCard === questions.questionData.length - 2) {
        nextBtnLabel = 'Ergebnis';
      }
    }

    // const data = __DEV__ &&
    //   <Data onClickLoad={ this.onClickLoad } onClickEdit={ this.onClickEdit }/>;
    const data = '';

    return (
      <div className="questions">
        <div styleName="questions">
          { data }
          { widgets }
        </div>
        <Footer nextBtnLabel={ nextBtnLabel } prevBtnLabel="Zurück" { ...this.props }/>
      </div>
    );
  }
}
