import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EpisodeList from './components/EpisodeList';

import { fetchEpisodesAsync } from './actions';
import { EPISODES } from './constants';

function Episodes({ episodes, loading, error, fetchEpisodes }) {
  useEffect(() => {
    fetchEpisodes();
  }, [fetchEpisodes]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {episodes !== null && (
        <section>
          
          <h1>{EPISODES}</h1>
          <EpisodeList episodes={ episodes }/>
        </section>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  episodes: state.episodes.data,
  loading: state.episodes.loading,
  error: state.episodes.error
});

const mapDispatchToProps = dispatch => ({
  fetchEpisodes: bindActionCreators(fetchEpisodesAsync, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
