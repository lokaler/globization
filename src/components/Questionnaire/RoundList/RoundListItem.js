import React, { PropTypes } from 'react';
import classnames from 'classnames';
import translate from 'logic/translate';

export default class RoundListItem extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    questionset: PropTypes.object.isRequired
  };

  handleClick = () => {
    //const key = this.props.questionset.key;
    //this.props.actions.setQuestionSet(key);
  }

  render() {
    return (
      <option value="{d}" onClick={ this.handleClick }>{d}</option>
    );
  }
}
