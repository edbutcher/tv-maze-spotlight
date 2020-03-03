import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchEpisodeByIdAsync } from './actions';
import * as episodeSelectors from './selectors';

function Episode() {
  const episode = useSelector(episodeSelectors.getEpisodeData);
  const loading = useSelector(episodeSelectors.getEpisodeLoading);
  const error = useSelector(episodeSelectors.getEpisodeError);

  const dispatch = useDispatch();

  const { episodeId } = useParams();

  useEffect(() => {
    dispatch(fetchEpisodeByIdAsync(episodeId));
  }, [dispatch, episodeId]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {episode !== null && (
        <section>
          <div>Episode title</div>
          <div>Episode Summary</div>
          <div>Episode cover image</div>
        </section>
      )}
    </>
  );
}

export default Episode;
