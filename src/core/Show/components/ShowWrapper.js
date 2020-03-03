import React from 'react';
import styles from './ShowWrapper.module.scss';

function ShowWrapper({ children }) {
  return <section className={styles.wrapper}>{children}</section>;
}

export default ShowWrapper;
