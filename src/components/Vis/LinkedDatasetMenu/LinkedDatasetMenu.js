/* eslint-disable */

import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from '../vis.scss';
import translate from 'logic/translate';
import d3 from 'd3';
import classnames from 'classnames';
import LinkedDatasetItem from './LinkedDatasetItem';

@cssModules(styles)

export default class LinkedDatasetMenu extends React.Component {

  static propTypes = {
    master: PropTypes.object.isRequired,
  };

  render() {
    const dataset = this.props.master.dataset;
    const linkedSet = d3.entries(dataset.linkedSet);

    return (
      <div className={ styles.component }>
        <ul>
          { linkedSet.map(
            (link, idx) => (
              <LinkedDatasetItem
                key={ idx }
                link={ link }
                idx={ idx } { ...this.props }
              />
            )
          )}
        </ul>
      </div>
    );
  }
}

