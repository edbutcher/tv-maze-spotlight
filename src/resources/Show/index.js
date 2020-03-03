import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchShowAsync } from './actions';

import Title from './components/ShowTitle';
import Description from './components/ShowDescription';
import Wrapper from './components/ShowWrapper';
import Image from './components/ShowImage';

function Show({ show, loading, error, fetchShow }) {
  useEffect(() => {
    fetchShow();
  }, [fetchShow]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {show !== null && (
        <Wrapper>
          <Title title={show.name} />
          <Image url={show.image.medium} alt={show.name} />
          <Description isHtml text={show.summary} />
        </Wrapper>
      )}
    </>
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
