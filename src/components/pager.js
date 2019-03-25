import React from 'react';
import { Pager } from 'react-bootstrap';

const PagerWidget = ({ currentPage, moreResults, onPagerClick }) => {
  const disablePrev = (currentPage === 1) ? true : false;
  const disableNext = (moreResults === 0) ? true : false;
  return (
    <Pager>
      <Pager.Item disabled={disablePrev} onClick={onPagerClick}>Previous</Pager.Item>
      {' '}
      <Pager.Item disabled={disableNext} onClick={onPagerClick}>Next</Pager.Item>
    </Pager>
  );
};

export default PagerWidget;
