import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EpisodeListItem.module.scss';

function EpisodeListItem({ episode }) {
  return (
    <Link className={styles.EpisodeListItem} to={`/episodes/${episode.id}`}>
      <p>{episode.number}</p>
      <p>{episode.season}</p>
      <p>{episode.name}</p>
      <p>{episode.airdate}</p>
    </Link>
  );
}

export default EpisodeListItem;
