import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShowAsync } from './actions';
import * as showSelectors from './selectors';

import Title from './components/ShowTitle';
import Description from './components/ShowDescription';
import Wrapper from './components/ShowWrapper';
import Image from './components/ShowImage';

function Show() {
  const show = useSelector(showSelectors.getShowData);
  const loading = useSelector(showSelectors.getShowLoading);
  const error = useSelector(showSelectors.getShowError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShowAsync());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {show !== null && (
        <Wrapper>
          <Title title={show.name} />
          <Image url={show.image.original} alt={show.name} />
          <Description isHtml text={show.summary} />
        </Wrapper>
      )}
    </>
  );
}

export default Show;
