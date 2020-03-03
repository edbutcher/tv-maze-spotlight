import React from 'react';
import { Link } from 'react-router-dom';

function EpisodeListItem({ episode }) {
  return (
    <Link to={`/episode/${episode.id}`}>
      <p>{episode.id}</p>
      <p>{episode.number}</p>
      <p>{episode.name}</p>
      <p>{episode.airdate}</p>
    </Link>
  );
}

export default EpisodeListItem;
