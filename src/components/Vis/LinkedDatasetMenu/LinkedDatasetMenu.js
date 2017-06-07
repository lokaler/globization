/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import translate from 'logic/translate';
import styles from './LinkedDatasetMenu.css';
import d3 from 'd3';
import classnames from 'classnames';
import LinkedDatasetItem from './LinkedDatasetItem';

export default class LinkedDatasetMenu extends React.Component {

  static propTypes = {
    questions: PropTypes.object.isRequired,
  };

  render() {
    const linkedSet = this.props.questions.dataset.linkedSet;
    const sortedSet = Array.from(linkedSet).sort((a,b) => d3.ascending(a.value, b.value));

    return (
      <div className={ styles.component }>
          { sortedSet.map(
            (link, idx) => (
              <LinkedDatasetItem
                key={ idx }
                link={ link }
                idx={ idx } { ...this.props }
              />
            )
          )}
      </div>
    );
  }
}

