import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { fetchShowAsync } from './actions';

function Episode({ show, loading, error, fetchShow }) {
  return (
    <section>
      <div>Episode title</div>
      <div>Episode Summary</div>
      <div>Episode cover image</div>
    </section>
  );
}

// const mapStateToProps = state => ({
//   episode: state.episode.episode,
//   loading: state.episode.loading,
//   error: state.episode.error
// });

// const mapDispatchToProps = dispatch => ({
//   fetchEpisode: bindActionCreators(fetchEpisodeAsync, dispatch)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Episode);
export default Episode;
