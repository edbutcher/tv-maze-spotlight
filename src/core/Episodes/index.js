import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import EpisodeList from './components/EpisodeList';
import Wrapper from './components/EpisodeListWrapper';

import { fetchEpisodesAsync } from './actions';
import { EPISODES } from './constants';
import * as episodesSelectors from './selectors';

function Episodes() {
  const episodes = useSelector(episodesSelectors.getEpisodesData);
  const loading = useSelector(episodesSelectors.getEpisodesLoading);
  const error = useSelector(episodesSelectors.getEpisodesError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEpisodesAsync());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {episodes !== null && (
        <Wrapper>
          <h1>{EPISODES}</h1>
          <EpisodeList episodes={episodes} />
        </Wrapper>
      )}
    </>
  );
}

export default Episodes;
