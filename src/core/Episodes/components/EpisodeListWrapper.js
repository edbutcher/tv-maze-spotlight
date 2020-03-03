import React from 'react';
import styles from './EpisodesListWrapper.module.scss';

function EpisodesListWrapper({ children }) {
  return <section className={styles.EpisodeListWrapper}>{children}</section>;
}

export default EpisodesListWrapper;
