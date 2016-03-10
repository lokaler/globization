import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

@cssModules()
export default class Outro extends React.Component {

  static propTypes = {
    questions: PropTypes.object.isRequired
  }

  render() {
    return (<div>
      <h1>Übermorgen</h1>
      <p>Hier steht das intro... Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Vitae consequatur
      dolorum voluptate nam necessitatibus quis eum voluptas
      laboriosam nostrum eaque quod reprehenderit molestiae,
      obcaecati ipsum deleniti. Possimus praesentium, ipsum molestias.</p>
      <p>Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Vitae consequatur
      dolorum voluptate nam necessitatibus quis eum voluptas
      laboriosam nostrum eaque quod reprehenderit molestiae,
      obcaecati ipsum deleniti. Possimus praesentium, ipsum molestias.</p>
    </div>);
  }

}
