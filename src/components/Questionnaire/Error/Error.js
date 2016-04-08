/* eslint-disable */
import React from 'react';
import styles from './Error.scss';

export default function (props) {
  return (
    <div className={ styles.component }>
      <code>{ props.children }</code>
    </div>
  );
}
