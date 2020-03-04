import React from 'react';
import EpisodeListItem from './EpisodeListItem';
import styles from './EpisodeList.module.scss';
const COLUMN_NAMES = ['Number', 'Season', 'Name', 'Date'];

function EpisodeListColumns({ columnNames }) {
  return (
    <div>
      {columnNames.map(columnName => (
        <p key={columnName}>{columnName}</p>
      ))}
    </div>
  );
}

function EpisodeList({ episodes }) {
  return (
    <div className={styles.EpisodeList}>
      <EpisodeListColumns columnNames={COLUMN_NAMES} />
      {episodes.map(episode => (
        <EpisodeListItem key={episode.id} episode={episode} />
      ))}
    </div>
  );
}

export default EpisodeList;
