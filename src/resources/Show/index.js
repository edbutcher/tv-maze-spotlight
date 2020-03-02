import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchShowAsync } from './actions';

function Show({ show, loading, error, fetchShow }) {
  useEffect(() => {
    fetchShow();
  }, [fetchShow]);

  return (
    <section>
      <div>Show title</div>
      <div>Show Description</div>
      <div>Show cover image</div>
      <div>
        Episode list. Every episode in the list should link to a details page
        for that specific episode
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  show: state.show.show,
  loading: state.show.loading,
  error: state.show.error
});

const mapDispatchToProps = dispatch => ({
  fetchShow: bindActionCreators(fetchShowAsync, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
