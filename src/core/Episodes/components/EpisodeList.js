import React from 'react';
import EpisodeListItem from './EpisodeListItem';
import styles from './EpisodeList.module.scss';

function EpisodeList({ episodes }) {
  return (
    <div className={styles.EpisodeList}>
      {episodes.map(episode => (
        <EpisodeListItem key={episode.id} episode={episode} />
      ))}
    </div>
  );
}

export default EpisodeList;
